#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int arr[6] = {1,2,3,4,5,6};
    int m = 3 ;
    int size = 6;
	int end = size - 1 ;
	int start = m+1 ;
	while(start <= end){
		swap(arr[start],arr[end]);
		start++ ;
		end-- ;
	}
    for (auto x : arr)
    {
        cout << x << " " ;
    }
    
    return 0;
}
