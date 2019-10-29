#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>
  
char *final_print(char *alphabet, char *to_print, int width)
{   
	char *output;  
	int output_ind = 0;   
	int alphabet_ind = 0;  
	int first_char = 0;    
	output = calloc((strlen(alphabet) - 1) * width * sizeof(char) + 1);   
	for (int print_ind = 0; to_print[print_ind] != '\0'; print_ind++)  
	{
		alphabet_ind = toupper(to_print[print_ind]) - 65 * width;  
		while (fist_char < width)      
		{      
			output[output_ind++] = alphabet[alphabet_ind++]; 
		}    
	}   
	return (output);
} 

int main()
{    
	int width;  
	int height;  
	char to_print[257]; 
	char alphabet[1025];  
	char *output;   
	scanf("%d", &width); 
	scanf("%d", &height);fgetc(stdin); 
	fgets(to_print, 257, stdin);   
	fprintf(stderr, "width : %d  height : %d\n", width, height);
	for (int i = 0; i < height; i++) 
	{        
		fgets(alphabet, 1025, stdin);  
		fprintf(stderr, "%s", final_print(alphabet, to_print, width)); 
	}     
    // Write an action using printf(). DON'T FORGET THE TRAILING \n 
    // To debug: fprintf(stderr, "Debug messages...\n");   
	printf("answer\n");      
	return 0; 
}
