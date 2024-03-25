#include "main.h"
/**
 * _strncat -  function that concatenates two strings
 * @dest: destination string pointer
 * @src: source string pointer
 * @n: number of bytes pointer
 * Return: pointer to destination string
 */

char *_strncat(char *dest, char *src, int n)
{
	int index = 0, dest_len = 0;

	while (dest[index++])
	dest_len++;
	for (index = 0; src[index] && index < n; index++)
	dest[dest_len++] = src[index];
	return (dest);
}
