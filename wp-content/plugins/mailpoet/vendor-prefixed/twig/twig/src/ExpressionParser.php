<?php
 namespace MailPoetVendor\Twig; if (!defined('ABSPATH')) exit; use MailPoetVendor\Twig\Error\SyntaxError; use MailPoetVendor\Twig\Node\Expression\AbstractExpression; use MailPoetVendor\Twig\Node\Expression\ArrayExpression; use MailPoetVendor\Twig\Node\Expression\ArrowFunctionExpression; use MailPoetVendor\Twig\Node\Expression\AssignNameExpression; use MailPoetVendor\Twig\Node\Expression\Binary\ConcatBinary; use MailPoetVendor\Twig\Node\Expression\BlockReferenceExpression; use MailPoetVendor\Twig\Node\Expression\ConditionalExpression; use MailPoetVendor\Twig\Node\Expression\ConstantExpression; use MailPoetVendor\Twig\Node\Expression\GetAttrExpression; use MailPoetVendor\Twig\Node\Expression\MethodCallExpression; use MailPoetVendor\Twig\Node\Expression\NameExpression; use MailPoetVendor\Twig\Node\Expression\ParentExpression; use MailPoetVendor\Twig\Node\Expression\TestExpression; use MailPoetVendor\Twig\Node\Expression\Unary\NegUnary; use MailPoetVendor\Twig\Node\Expression\Unary\NotUnary; use MailPoetVendor\Twig\Node\Expression\Unary\PosUnary; use MailPoetVendor\Twig\Node\Node; class ExpressionParser { const OPERATOR_LEFT = 1; const OPERATOR_RIGHT = 2; private $parser; private $env; private $unaryOperators; private $binaryOperators; public function __construct(\MailPoetVendor\Twig\Parser $parser, \MailPoetVendor\Twig\Environment $env) { $this->parser = $parser; $this->env = $env; $this->unaryOperators = $env->getUnaryOperators(); $this->binaryOperators = $env->getBinaryOperators(); } public function parseExpression($precedence = 0, $allowArrow = \false) { if ($allowArrow && ($arrow = $this->parseArrow())) { return $arrow; } $expr = $this->getPrimary(); $token = $this->parser->getCurrentToken(); while ($this->isBinary($token) && $this->binaryOperators[$token->getValue()]['precedence'] >= $precedence) { $op = $this->binaryOperators[$token->getValue()]; $this->parser->getStream()->next(); if ('is not' === $token->getValue()) { $expr = $this->parseNotTestExpression($expr); } elseif ('is' === $token->getValue()) { $expr = $this->parseTestExpression($expr); } elseif (isset($op['callable'])) { $expr = $op['callable']($this->parser, $expr); } else { $expr1 = $this->parseExpression(self::OPERATOR_LEFT === $op['associativity'] ? $op['precedence'] + 1 : $op['precedence']); $class = $op['class']; $expr = new $class($expr, $expr1, $token->getLine()); } $token = $this->parser->getCurrentToken(); } if (0 === $precedence) { return $this->parseConditionalExpression($expr); } return $expr; } private function parseArrow() { $stream = $this->parser->getStream(); if ($stream->look(1)->test( 12 )) { $line = $stream->getCurrent()->getLine(); $token = $stream->expect( 5 ); $names = [new \MailPoetVendor\Twig\Node\Expression\AssignNameExpression($token->getValue(), $token->getLine())]; $stream->expect( 12 ); return new \MailPoetVendor\Twig\Node\Expression\ArrowFunctionExpression($this->parseExpression(0), new \MailPoetVendor\Twig\Node\Node($names), $line); } $i = 0; if (!$stream->look($i)->test( 9, '(' )) { return null; } ++$i; while (\true) { ++$i; if (!$stream->look($i)->test( 9, ',' )) { break; } ++$i; } if (!$stream->look($i)->test( 9, ')' )) { return null; } ++$i; if (!$stream->look($i)->test( 12 )) { return null; } $token = $stream->expect( 9, '(' ); $line = $token->getLine(); $names = []; while (\true) { $token = $stream->expect( 5 ); $names[] = new \MailPoetVendor\Twig\Node\Expression\AssignNameExpression($token->getValue(), $token->getLine()); if (!$stream->nextIf( 9, ',' )) { break; } } $stream->expect( 9, ')' ); $stream->expect( 12 ); return new \MailPoetVendor\Twig\Node\Expression\ArrowFunctionExpression($this->parseExpression(0), new \MailPoetVendor\Twig\Node\Node($names), $line); } private function getPrimary() : \MailPoetVendor\Twig\Node\Expression\AbstractExpression { $token = $this->parser->getCurrentToken(); if ($this->isUnary($token)) { $operator = $this->unaryOperators[$token->getValue()]; $this->parser->getStream()->next(); $expr = $this->parseExpression($operator['precedence']); $class = $operator['class']; return $this->parsePostfixExpression(new $class($expr, $token->getLine())); } elseif ($token->test( 9, '(' )) { $this->parser->getStream()->next(); $expr = $this->parseExpression(); $this->parser->getStream()->expect( 9, ')', 'An opened parenthesis is not properly closed' ); return $this->parsePostfixExpression($expr); } return $this->parsePrimaryExpression(); } private function parseConditionalExpression($expr) : \MailPoetVendor\Twig\Node\Expression\AbstractExpression { while ($this->parser->getStream()->nextIf( 9, '?' )) { if (!$this->parser->getStream()->nextIf( 9, ':' )) { $expr2 = $this->parseExpression(); if ($this->parser->getStream()->nextIf( 9, ':' )) { $expr3 = $this->parseExpression(); } else { $expr3 = new \MailPoetVendor\Twig\Node\Expression\ConstantExpression('', $this->parser->getCurrentToken()->getLine()); } } else { $expr2 = $expr; $expr3 = $this->parseExpression(); } $expr = new \MailPoetVendor\Twig\Node\Expression\ConditionalExpression($expr, $expr2, $expr3, $this->parser->getCurrentToken()->getLine()); } return $expr; } private function isUnary(\MailPoetVendor\Twig\Token $token) : bool { return $token->test( 8 ) && isset($this->unaryOperators[$token->getValue()]); } private function isBinary(\MailPoetVendor\Twig\Token $token) : bool { return $token->test( 8 ) && isset($this->binaryOperators[$token->getValue()]); } public function parsePrimaryExpression() { $token = $this->parser->getCurrentToken(); switch ($token->getType()) { case 5: $this->parser->getStream()->next(); switch ($token->getValue()) { case 'true': case 'TRUE': $node = new \MailPoetVendor\Twig\Node\Expression\ConstantExpression(\true, $token->getLine()); break; case 'false': case 'FALSE': $node = new \MailPoetVendor\Twig\Node\Expression\ConstantExpression(\false, $token->getLine()); break; case 'none': case 'NONE': case 'null': case 'NULL': $node = new \MailPoetVendor\Twig\Node\Expression\ConstantExpression(null, $token->getLine()); break; default: if ('(' === $this->parser->getCurrentToken()->getValue()) { $node = $this->getFunctionNode($token->getValue(), $token->getLine()); } else { $node = new \MailPoetVendor\Twig\Node\Expression\NameExpression($token->getValue(), $token->getLine()); } } break; case 6: $this->parser->getStream()->next(); $node = new \MailPoetVendor\Twig\Node\Expression\ConstantExpression($token->getValue(), $token->getLine()); break; case 7: case 10: $node = $this->parseStringExpression(); break; case 8: if (\preg_match(\MailPoetVendor\Twig\Lexer::REGEX_NAME, $token->getValue(), $matches) && $matches[0] == $token->getValue()) { $this->parser->getStream()->next(); $node = new \MailPoetVendor\Twig\Node\Expression\NameExpression($token->getValue(), $token->getLine()); break; } elseif (isset($this->unaryOperators[$token->getValue()])) { $class = $this->unaryOperators[$token->getValue()]['class']; $ref = new \ReflectionClass($class); if (!(\in_array($ref->getName(), [\MailPoetVendor\Twig\Node\Expression\Unary\NegUnary::class, \MailPoetVendor\Twig\Node\Expression\Unary\PosUnary::class, 'Twig_Node_Expression_Unary_Neg', 'Twig_Node_Expression_Unary_Pos']) || $ref->isSubclassOf(\MailPoetVendor\Twig\Node\Expression\Unary\NegUnary::class) || $ref->isSubclassOf(\MailPoetVendor\Twig\Node\Expression\Unary\PosUnary::class) || $ref->isSubclassOf('Twig_Node_Expression_Unary_Neg') || $ref->isSubclassOf('Twig_Node_Expression_Unary_Pos'))) { throw new \MailPoetVendor\Twig\Error\SyntaxError(\sprintf('Unexpected unary operator "%s".', $token->getValue()), $token->getLine(), $this->parser->getStream()->getSourceContext()); } $this->parser->getStream()->next(); $expr = $this->parsePrimaryExpression(); $node = new $class($expr, $token->getLine()); break; } default: if ($token->test( 9, '[' )) { $node = $this->parseArrayExpression(); } elseif ($token->test( 9, '{' )) { $node = $this->parseHashExpression(); } elseif ($token->test( 8, '=' ) && ('==' === $this->parser->getStream()->look(-1)->getValue() || '!=' === $this->parser->getStream()->look(-1)->getValue())) { throw new \MailPoetVendor\Twig\Error\SyntaxError(\sprintf('Unexpected operator of value "%s". Did you try to use "===" or "!==" for strict comparison? Use "is same as(value)" instead.', $token->getValue()), $token->getLine(), $this->parser->getStream()->getSourceContext()); } else { throw new \MailPoetVendor\Twig\Error\SyntaxError(\sprintf('Unexpected token "%s" of value "%s".', \MailPoetVendor\Twig\Token::typeToEnglish($token->getType()), $token->getValue()), $token->getLine(), $this->parser->getStream()->getSourceContext()); } } return $this->parsePostfixExpression($node); } public function parseStringExpression() { $stream = $this->parser->getStream(); $nodes = []; $nextCanBeString = \true; while (\true) { if ($nextCanBeString && ($token = $stream->nextIf( 7 ))) { $nodes[] = new \MailPoetVendor\Twig\Node\Expression\ConstantExpression($token->getValue(), $token->getLine()); $nextCanBeString = \false; } elseif ($stream->nextIf( 10 )) { $nodes[] = $this->parseExpression(); $stream->expect( 11 ); $nextCanBeString = \true; } else { break; } } $expr = \array_shift($nodes); foreach ($nodes as $node) { $expr = new \MailPoetVendor\Twig\Node\Expression\Binary\ConcatBinary($expr, $node, $node->getTemplateLine()); } return $expr; } public function parseArrayExpression() { $stream = $this->parser->getStream(); $stream->expect( 9, '[', 'An array element was expected' ); $node = new \MailPoetVendor\Twig\Node\Expression\ArrayExpression([], $stream->getCurrent()->getLine()); $first = \true; while (!$stream->test( 9, ']' )) { if (!$first) { $stream->expect( 9, ',', 'An array element must be followed by a comma' ); if ($stream->test( 9, ']' )) { break; } } $first = \false; $node->addElement($this->parseExpression()); } $stream->expect( 9, ']', 'An opened array is not properly closed' ); return $node; } public function parseHashExpression() { $stream = $this->parser->getStream(); $stream->expect( 9, '{', 'A hash element was expected' ); $node = new \MailPoetVendor\Twig\Node\Expression\ArrayExpression([], $stream->getCurrent()->getLine()); $first = \true; while (!$stream->test( 9, '}' )) { if (!$first) { $stream->expect( 9, ',', 'A hash value must be followed by a comma' ); if ($stream->test( 9, '}' )) { break; } } $first = \false; if (($token = $stream->nextIf( 7 )) || ($token = $stream->nextIf( 5 )) || ($token = $stream->nextIf( 6 ))) { $key = new \MailPoetVendor\Twig\Node\Expression\ConstantExpression($token->getValue(), $token->getLine()); } elseif ($stream->test( 9, '(' )) { $key = $this->parseExpression(); } else { $current = $stream->getCurrent(); throw new \MailPoetVendor\Twig\Error\SyntaxError(\sprintf('A hash key must be a quoted string, a number, a name, or an expression enclosed in parentheses (unexpected token "%s" of value "%s".', \MailPoetVendor\Twig\Token::typeToEnglish($current->getType()), $current->getValue()), $current->getLine(), $stream->getSourceContext()); } $stream->expect( 9, ':', 'A hash key must be followed by a colon (:)' ); $value = $this->parseExpression(); $node->addElement($value, $key); } $stream->expect( 9, '}', 'An opened hash is not properly closed' ); return $node; } public function parsePostfixExpression($node) { while (\true) { $token = $this->parser->getCurrentToken(); if (9 == $token->getType()) { if ('.' == $token->getValue() || '[' == $token->getValue()) { $node = $this->parseSubscriptExpression($node); } elseif ('|' == $token->getValue()) { $node = $this->parseFilterExpression($node); } else { break; } } else { break; } } return $node; } public function getFunctionNode($name, $line) { switch ($name) { case 'parent': $this->parseArguments(); if (!\count($this->parser->getBlockStack())) { throw new \MailPoetVendor\Twig\Error\SyntaxError('Calling "parent" outside a block is forbidden.', $line, $this->parser->getStream()->getSourceContext()); } if (!$this->parser->getParent() && !$this->parser->hasTraits()) { throw new \MailPoetVendor\Twig\Error\SyntaxError('Calling "parent" on a template that does not extend nor "use" another template is forbidden.', $line, $this->parser->getStream()->getSourceContext()); } return new \MailPoetVendor\Twig\Node\Expression\ParentExpression($this->parser->peekBlockStack(), $line); case 'block': $args = $this->parseArguments(); if (\count($args) < 1) { throw new \MailPoetVendor\Twig\Error\SyntaxError('The "block" function takes one argument (the block name).', $line, $this->parser->getStream()->getSourceContext()); } return new \MailPoetVendor\Twig\Node\Expression\BlockReferenceExpression($args->getNode(0), \count($args) > 1 ? $args->getNode(1) : null, $line); case 'attribute': $args = $this->parseArguments(); if (\count($args) < 2) { throw new \MailPoetVendor\Twig\Error\SyntaxError('The "attribute" function takes at least two arguments (the variable and the attributes).', $line, $this->parser->getStream()->getSourceContext()); } return new \MailPoetVendor\Twig\Node\Expression\GetAttrExpression($args->getNode(0), $args->getNode(1), \count($args) > 2 ? $args->getNode(2) : null, \MailPoetVendor\Twig\Template::ANY_CALL, $line); default: if (null !== ($alias = $this->parser->getImportedSymbol('function', $name))) { $arguments = new \MailPoetVendor\Twig\Node\Expression\ArrayExpression([], $line); foreach ($this->parseArguments() as $n) { $arguments->addElement($n); } $node = new \MailPoetVendor\Twig\Node\Expression\MethodCallExpression($alias['node'], $alias['name'], $arguments, $line); $node->setAttribute('safe', \true); return $node; } $args = $this->parseArguments(\true); $class = $this->getFunctionNodeClass($name, $line); return new $class($name, $args, $line); } } public function parseSubscriptExpression($node) { $stream = $this->parser->getStream(); $token = $stream->next(); $lineno = $token->getLine(); $arguments = new \MailPoetVendor\Twig\Node\Expression\ArrayExpression([], $lineno); $type = \MailPoetVendor\Twig\Template::ANY_CALL; if ('.' == $token->getValue()) { $token = $stream->next(); if (5 == $token->getType() || 6 == $token->getType() || 8 == $token->getType() && \preg_match(\MailPoetVendor\Twig\Lexer::REGEX_NAME, $token->getValue())) { $arg = new \MailPoetVendor\Twig\Node\Expression\ConstantExpression($token->getValue(), $lineno); if ($stream->test( 9, '(' )) { $type = \MailPoetVendor\Twig\Template::METHOD_CALL; foreach ($this->parseArguments() as $n) { $arguments->addElement($n); } } } else { throw new \MailPoetVendor\Twig\Error\SyntaxError('Expected name or number.', $lineno, $stream->getSourceContext()); } if ($node instanceof \MailPoetVendor\Twig\Node\Expression\NameExpression && null !== $this->parser->getImportedSymbol('template', $node->getAttribute('name'))) { if (!$arg instanceof \MailPoetVendor\Twig\Node\Expression\ConstantExpression) { throw new \MailPoetVendor\Twig\Error\SyntaxError(\sprintf('Dynamic macro names are not supported (called on "%s").', $node->getAttribute('name')), $token->getLine(), $stream->getSourceContext()); } $name = $arg->getAttribute('value'); $node = new \MailPoetVendor\Twig\Node\Expression\MethodCallExpression($node, 'macro_' . $name, $arguments, $lineno); $node->setAttribute('safe', \true); return $node; } } else { $type = \MailPoetVendor\Twig\Template::ARRAY_CALL; $slice = \false; if ($stream->test( 9, ':' )) { $slice = \true; $arg = new \MailPoetVendor\Twig\Node\Expression\ConstantExpression(0, $token->getLine()); } else { $arg = $this->parseExpression(); } if ($stream->nextIf( 9, ':' )) { $slice = \true; } if ($slice) { if ($stream->test( 9, ']' )) { $length = new \MailPoetVendor\Twig\Node\Expression\ConstantExpression(null, $token->getLine()); } else { $length = $this->parseExpression(); } $class = $this->getFilterNodeClass('slice', $token->getLine()); $arguments = new \MailPoetVendor\Twig\Node\Node([$arg, $length]); $filter = new $class($node, new \MailPoetVendor\Twig\Node\Expression\ConstantExpression('slice', $token->getLine()), $arguments, $token->getLine()); $stream->expect( 9, ']' ); return $filter; } $stream->expect( 9, ']' ); } return new \MailPoetVendor\Twig\Node\Expression\GetAttrExpression($node, $arg, $arguments, $type, $lineno); } public function parseFilterExpression($node) { $this->parser->getStream()->next(); return $this->parseFilterExpressionRaw($node); } public function parseFilterExpressionRaw($node, $tag = null) { while (\true) { $token = $this->parser->getStream()->expect( 5 ); $name = new \MailPoetVendor\Twig\Node\Expression\ConstantExpression($token->getValue(), $token->getLine()); if (!$this->parser->getStream()->test( 9, '(' )) { $arguments = new \MailPoetVendor\Twig\Node\Node(); } else { $arguments = $this->parseArguments(\true, \false, \true); } $class = $this->getFilterNodeClass($name->getAttribute('value'), $token->getLine()); $node = new $class($node, $name, $arguments, $token->getLine(), $tag); if (!$this->parser->getStream()->test( 9, '|' )) { break; } $this->parser->getStream()->next(); } return $node; } public function parseArguments($namedArguments = \false, $definition = \false, $allowArrow = \false) { $args = []; $stream = $this->parser->getStream(); $stream->expect( 9, '(', 'A list of arguments must begin with an opening parenthesis' ); while (!$stream->test( 9, ')' )) { if (!empty($args)) { $stream->expect( 9, ',', 'Arguments must be separated by a comma' ); if ($stream->test( 9, ')' )) { break; } } if ($definition) { $token = $stream->expect( 5, null, 'An argument must be a name' ); $value = new \MailPoetVendor\Twig\Node\Expression\NameExpression($token->getValue(), $this->parser->getCurrentToken()->getLine()); } else { $value = $this->parseExpression(0, $allowArrow); } $name = null; if ($namedArguments && ($token = $stream->nextIf( 8, '=' ))) { if (!$value instanceof \MailPoetVendor\Twig\Node\Expression\NameExpression) { throw new \MailPoetVendor\Twig\Error\SyntaxError(\sprintf('A parameter name must be a string, "%s" given.', \get_class($value)), $token->getLine(), $stream->getSourceContext()); } $name = $value->getAttribute('name'); if ($definition) { $value = $this->parsePrimaryExpression(); if (!$this->checkConstantExpression($value)) { throw new \MailPoetVendor\Twig\Error\SyntaxError(\sprintf('A default value for an argument must be a constant (a boolean, a string, a number, or an array).'), $token->getLine(), $stream->getSourceContext()); } } else { $value = $this->parseExpression(0, $allowArrow); } } if ($definition) { if (null === $name) { $name = $value->getAttribute('name'); $value = new \MailPoetVendor\Twig\Node\Expression\ConstantExpression(null, $this->parser->getCurrentToken()->getLine()); } $args[$name] = $value; } else { if (null === $name) { $args[] = $value; } else { $args[$name] = $value; } } } $stream->expect( 9, ')', 'A list of arguments must be closed by a parenthesis' ); return new \MailPoetVendor\Twig\Node\Node($args); } public function parseAssignmentExpression() { $stream = $this->parser->getStream(); $targets = []; while (\true) { $token = $this->parser->getCurrentToken(); if ($stream->test( 8 ) && \preg_match(\MailPoetVendor\Twig\Lexer::REGEX_NAME, $token->getValue())) { $this->parser->getStream()->next(); } else { $stream->expect( 5, null, 'Only variables can be assigned to' ); } $value = $token->getValue(); if (\in_array(\strtr($value, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), ['true', 'false', 'none', 'null'])) { throw new \MailPoetVendor\Twig\Error\SyntaxError(\sprintf('You cannot assign a value to "%s".', $value), $token->getLine(), $stream->getSourceContext()); } $targets[] = new \MailPoetVendor\Twig\Node\Expression\AssignNameExpression($value, $token->getLine()); if (!$stream->nextIf( 9, ',' )) { break; } } return new \MailPoetVendor\Twig\Node\Node($targets); } public function parseMultitargetExpression() { $targets = []; while (\true) { $targets[] = $this->parseExpression(); if (!$this->parser->getStream()->nextIf( 9, ',' )) { break; } } return new \MailPoetVendor\Twig\Node\Node($targets); } private function parseNotTestExpression(\MailPoetVendor\Twig\Node\Node $node) : \MailPoetVendor\Twig\Node\Expression\Unary\NotUnary { return new \MailPoetVendor\Twig\Node\Expression\Unary\NotUnary($this->parseTestExpression($node), $this->parser->getCurrentToken()->getLine()); } private function parseTestExpression(\MailPoetVendor\Twig\Node\Node $node) : \MailPoetVendor\Twig\Node\Expression\TestExpression { $stream = $this->parser->getStream(); list($name, $test) = $this->getTest($node->getTemplateLine()); $class = $this->getTestNodeClass($test); $arguments = null; if ($stream->test( 9, '(' )) { $arguments = $this->parseArguments(\true); } if ('defined' === $name && $node instanceof \MailPoetVendor\Twig\Node\Expression\NameExpression && null !== ($alias = $this->parser->getImportedSymbol('function', $node->getAttribute('name')))) { $node = new \MailPoetVendor\Twig\Node\Expression\MethodCallExpression($alias['node'], $alias['name'], new \MailPoetVendor\Twig\Node\Expression\ArrayExpression([], $node->getTemplateLine()), $node->getTemplateLine()); $node->setAttribute('safe', \true); } return new $class($node, $name, $arguments, $this->parser->getCurrentToken()->getLine()); } private function getTest(int $line) : array { $stream = $this->parser->getStream(); $name = $stream->expect( 5 )->getValue(); if ($test = $this->env->getTest($name)) { return [$name, $test]; } if ($stream->test( 5 )) { $name = $name . ' ' . $this->parser->getCurrentToken()->getValue(); if ($test = $this->env->getTest($name)) { $stream->next(); return [$name, $test]; } } $e = new \MailPoetVendor\Twig\Error\SyntaxError(\sprintf('Unknown "%s" test.', $name), $line, $stream->getSourceContext()); $e->addSuggestions($name, \array_keys($this->env->getTests())); throw $e; } private function getTestNodeClass(\MailPoetVendor\Twig\TwigTest $test) : string { if ($test->isDeprecated()) { $stream = $this->parser->getStream(); $message = \sprintf('Twig Test "%s" is deprecated', $test->getName()); if (!\is_bool($test->getDeprecatedVersion())) { $message .= \sprintf(' since version %s', $test->getDeprecatedVersion()); } if ($test->getAlternative()) { $message .= \sprintf('. Use "%s" instead', $test->getAlternative()); } $src = $stream->getSourceContext(); $message .= \sprintf(' in %s at line %d.', $src->getPath() ?: $src->getName(), $stream->getCurrent()->getLine()); @\trigger_error($message, \E_USER_DEPRECATED); } return $test->getNodeClass(); } private function getFunctionNodeClass(string $name, int $line) : string { if (\false === ($function = $this->env->getFunction($name))) { $e = new \MailPoetVendor\Twig\Error\SyntaxError(\sprintf('Unknown "%s" function.', $name), $line, $this->parser->getStream()->getSourceContext()); $e->addSuggestions($name, \array_keys($this->env->getFunctions())); throw $e; } if ($function->isDeprecated()) { $message = \sprintf('Twig Function "%s" is deprecated', $function->getName()); if (!\is_bool($function->getDeprecatedVersion())) { $message .= \sprintf(' since version %s', $function->getDeprecatedVersion()); } if ($function->getAlternative()) { $message .= \sprintf('. Use "%s" instead', $function->getAlternative()); } $src = $this->parser->getStream()->getSourceContext(); $message .= \sprintf(' in %s at line %d.', $src->getPath() ?: $src->getName(), $line); @\trigger_error($message, \E_USER_DEPRECATED); } return $function->getNodeClass(); } private function getFilterNodeClass(string $name, int $line) : string { if (\false === ($filter = $this->env->getFilter($name))) { $e = new \MailPoetVendor\Twig\Error\SyntaxError(\sprintf('Unknown "%s" filter.', $name), $line, $this->parser->getStream()->getSourceContext()); $e->addSuggestions($name, \array_keys($this->env->getFilters())); throw $e; } if ($filter->isDeprecated()) { $message = \sprintf('Twig Filter "%s" is deprecated', $filter->getName()); if (!\is_bool($filter->getDeprecatedVersion())) { $message .= \sprintf(' since version %s', $filter->getDeprecatedVersion()); } if ($filter->getAlternative()) { $message .= \sprintf('. Use "%s" instead', $filter->getAlternative()); } $src = $this->parser->getStream()->getSourceContext(); $message .= \sprintf(' in %s at line %d.', $src->getPath() ?: $src->getName(), $line); @\trigger_error($message, \E_USER_DEPRECATED); } return $filter->getNodeClass(); } private function checkConstantExpression(\MailPoetVendor\Twig\Node\Node $node) : bool { if (!($node instanceof \MailPoetVendor\Twig\Node\Expression\ConstantExpression || $node instanceof \MailPoetVendor\Twig\Node\Expression\ArrayExpression || $node instanceof \MailPoetVendor\Twig\Node\Expression\Unary\NegUnary || $node instanceof \MailPoetVendor\Twig\Node\Expression\Unary\PosUnary)) { return \false; } foreach ($node as $n) { if (!$this->checkConstantExpression($n)) { return \false; } } return \true; } } \class_alias('MailPoetVendor\\Twig\\ExpressionParser', 'MailPoetVendor\\Twig_ExpressionParser'); 