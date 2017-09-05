/*Given a linked list, remove the nth node from the end of list and return its head.

For example,

   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:
Given n will always be valid.
Try to do this in one pass.
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
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode *first = head;
        ListNode *du = first;
        ListNode *tmp = head;
        for(int i = 0;i<n;i++){
            tmp = tmp->next;
        }
        if(tmp == NULL)  
            return head->next;
        while(tmp->next!=NULL){
            first = first->next;
            tmp = tmp->next;
        }
        first->next= first->next->next;
        return du;
    }
};
