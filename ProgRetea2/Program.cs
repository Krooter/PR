using System;
using System.Threading;

namespace playground
{ 
    class BasicWaitHandle
    {
        static EventWaitHandle _waitHandle12 = new AutoResetEvent(false);
        static EventWaitHandle _waitHandle23 = new AutoResetEvent(false);
        static EventWaitHandle _waitHandle34 = new AutoResetEvent(false);
        static EventWaitHandle _waitHandle45 = new AutoResetEvent(false);
        static EventWaitHandle _waitHandle56 = new AutoResetEvent(false);

        static void Thread1()
        {
            Console.WriteLine("Thread 1");
            _waitHandle12.Set();
        }
        static void Thread2() 
        {
            _waitHandle12.WaitOne();
            Console.WriteLine("Thread 2");
            _waitHandle23.Set();
        }
        static void Thread3()
        {
            _waitHandle23.WaitOne();
            Console.WriteLine("Thread 3");
            _waitHandle34.Set();
        }
        static void Thread4()
        {
            _waitHandle34.WaitOne();
            Console.WriteLine("Thread 4");
            _waitHandle45.Set();
        }
        static void Thread5()
        {
            _waitHandle45.WaitOne();
            Console.WriteLine("Thread 5");
            _waitHandle56.Set();
        }
        static void Thread6()
        {
            _waitHandle56.WaitOne();
            Console.WriteLine("Thread 6");
        }
        static void Main()
        {
            new Thread(Thread1).Start();
            new Thread(Thread2).Start();
            new Thread(Thread3).Start();
            new Thread(Thread4).Start();
            new Thread(Thread5).Start();
            new Thread(Thread6).Start();
        }
    }
}