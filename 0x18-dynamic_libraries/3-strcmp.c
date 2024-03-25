#include "main.h"
/**
 * _strcmp - function that compares two strings
 * @s1: first string pointer
 * @s2: second dtring pointer
 * Return: if str1 < str2 negative diff of the firdt two unmatched numbers
 * if str1 == str2, 0
 * if str1 > str2 positive diff of the first two unmatched numbers
 */
int _strcmp(char *s1, char *s2)
{
	while (*s1 && *s2 && *s1 == *s2)
	{
		s1++;
		s2++;
	}
	return (*s1 = *s2);
}
