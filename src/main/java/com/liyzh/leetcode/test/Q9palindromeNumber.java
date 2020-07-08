package com.liyzh.leetcode.test;

public class Q9palindromeNumber {
    public static boolean isPalindrome(int x) {
        if (x < 0) return false;
        int y = x;
        int res = 0;
        while (y != 0) {
            res = res * 10 + y % 10;
            y /= 10;
        }
        // 953423641
        // 944301820
        return x == res;
    }

    public static void main(String[] args) {
        boolean a = isPalindrome(2146324359);
        int b = 953423641;
        int d = 944301818;
        int c = b * 10 + 2;
        System.out.println(b * 10);
        System.out.println(c);
        System.out.println(a);
        int value = Integer.MAX_VALUE - 1;
        for (int i = 0; i < 4; i++, value++) {
            System.out.println(i);
            System.out.println(value);
            System.out.println(value * 4);
        }
    }
}
