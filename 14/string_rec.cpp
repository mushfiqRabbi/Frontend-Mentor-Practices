#include <iostream>
using namespace std;

int main()
{
  string inputString;
  cout << "Enter a String : ";
  cin >> inputString;
  int strLen = inputString.length();
  int tf = 0;
  if (inputString[0] == 'a')
  {
    for(int i = 0; i < strLen ; i++)
    {
      if(i != 0)
      {
        if(inputString[i] == 'a' && inputString[i-1] == 'a')
        {
          tf = 1;
          continue;
        }
        else if((inputString[i] == 'd' && inputString[i-1] == 'a') || (inputString[i] == 'd' && inputString[i-1] == 'd'))
        {
          tf = 1;
          continue;
        }
        else if(inputString[i] == 'b' && i == 1)
        {
          tf = 1;
          continue;
        }
        else if(inputString[i] == 'b' && inputString[i-1] == 'b')
        {
          tf = 1;
          continue;
        }
        else if(inputString[i] == 'b' && i == (strLen-2) && inputString[strLen-1] == 'c')
        {
          tf = 1;
          continue;
        }
        else if(inputString[i] == 'c' && i == (strLen-1))
        {
          tf = 1;
          continue;
        }
        else
        {
          tf = 0;
          break;
        }
      }
    }
  }
  else
  {
    tf = 0;
  }

  if(tf)
  {
    cout << "The string is recognized !";
  }
  else
  {
    cout << "The string is not recognized !";
  }

  return 0;
}