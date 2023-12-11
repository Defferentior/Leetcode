class Solution9 {
 /* First time Beat 100% of java users as of sumbission on speed, but only 22% on memory */
    public static boolean isPalindrome(int x){
        //System.out.println(x);
        if (x < 0) return false;
        if (x < 10) return true;
        if (x % 10 == 0) return false; //Only case where this works is 0, which is taken care of in x < 10
        int reverse = 0;
        /* wish I could say I came up with this, but this was github copilot code, 
        the way it works is simple, it takes out the back half of x, reverses it & makes it a new number, 
        called reverse then compares*/
       while (x > reverse){
            //System.out.println(x+" "+reverse);
            reverse = reverse * 10 + x % 10;
            x /= 10;
            //System.out.println(x+" "+reverse);
        } 
        System.out.println(x+" "+reverse);
        return x == reverse || x == reverse / 10;
    }

    public static void main (String args[]){
        //boolean test = isPalindrome(121);
        int[] tests = new int[]{2222,40204,40};
        for (int test : tests){
            System.out.println("testing: "+test+", result: "+isPalindrome(test));
        }

        //System.out.println(-121isPalindrome(-121));
    }
}

// Path: 10/Solution10.java
