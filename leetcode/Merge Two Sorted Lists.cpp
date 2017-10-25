/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
*/

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        ListNode* h = new ListNode(0);
        ListNode *tmp = h;
        while(l1&&l2){
            if (l1->val > l2->val) {
		        tmp->next = l2;
                tmp = tmp->next;
		        l2 = l2->next;
	        }
	        else {
                tmp->next = l1;
                tmp = tmp->next;
		        l1 = l1->next;
            }  
        }
        if(l1)tmp->next=l1;
        if(l2)tmp->next=l2;
        return h->next;
    }
};