/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
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
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        int e = 0, sum;
	ListNode *head, *r;
	r = head = NULL;
	while (l1 || l2 ) {
		sum = (l1? l1->val: 0) + (l2? l2->val: 0) + e;

		e = sum / 10;
		ListNode* s = new ListNode(sum % 10);
		if (head == NULL)
		{
			head = s;
		}
		else
		{
			r->next = s;
		}
		r = s;
	    l1 = l1? l1->next: NULL;
        l2 = l2? l2->next: NULL;
	}
       if (e > 0) {
        ListNode* l = new ListNode(e);
        r->next = l;
    }
        return head;
    }
};