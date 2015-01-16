# I am just experimenting with python
# I seem to like pythons flexibility with lists
# 
def bubble_sort(*arr):
    old_list = list(arr)
    result = []
    i = 0
    while(i < len(old_list)):
        minimum = min(old_list)
        result.append(minimum)
        old_list.remove(minimum)
    return result
        
        
        
