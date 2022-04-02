#include <iostream>
#include <fstream>
using namespace std;


class Solution
{
public:
    string simplifyPath(string path)
    {
        auto split = [](const string &s, char delim) -> vector<string>
        {
            vector<string> ans;
            string cur;
            for (char ch : s)
            {
                if (ch == delim)
                {
                    ans.push_back(cur);
                    cur.clear();
                }
                else
                {
                    cur += ch;
                }
            }
            ans.push_back(cur);
            return ans;
        };
        vector<string> names = split(path, '/');
        vector<string> stack;
        for (string &ele : names)
        {
            if (ele == "" || ele == ".")
                continue;
            if (ele == "..")
            {
                if (!stack.empty())
                {
                    stack.pop_back();
                }
            }
            else
            {
                stack.push_back(ele);
            }
            //cout << ele << "\n";
        }
        if (stack.empty())
            return "/";
        string ans;
        for (string &ele : stack)
        {
            ans += "/" + ele;
        }
        return ans;
    };
};
