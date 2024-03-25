#include "main.h"

/**
 * _isdigit - checks for a digit
 * @x: the character to be checked
 * Return: 1 if it's a digit 0 otherwise
 */

int _isdigit(int x)
{
	if (x >= 47 && x <= 57)
	{
	return (1);
	}
	return (0);
}
