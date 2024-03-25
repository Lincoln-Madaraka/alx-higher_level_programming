 #include "main.h"
/**
 * _strcat -  function that concatenates two strings
 * @dest: The string for destination
 * @src: The string for the source.
 * Return: Apointer to destination string.
 */

char *_strcat(char *dest, char *src)
{
	int length_of_string, z;

	length_of_string = 0;
	while (dest[length_of_string] != '\0')
	{
		length_of_string++;
	}
	for (z = 0; src[z] != '\0'; z++)
	{
		dest[length_of_string] = src[z];
	}
	dest[length_of_string] = '\0';
	return (dest);
}
