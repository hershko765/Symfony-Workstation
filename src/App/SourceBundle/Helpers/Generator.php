<?php
namespace App\SourceBundle\Helpers;
/**
 * ****DESCRIPTION OF FILE****
 *
 * @package    Sortex
 * @author     Sortex Systems Development Ltd.
 * @copyright  (c) 2011-2013 Sortex
 * @license    BSD
 * @link       http://www.sortex.co.il
 */
class Generator {

	public static function uniqueHash($len = FALSE)
	{
		$sha = md5(time());
		$start = rand(0, 32 - $len);
		return $len ? substr($sha, $start, $len) : $sha;
	}
} // End Generator 