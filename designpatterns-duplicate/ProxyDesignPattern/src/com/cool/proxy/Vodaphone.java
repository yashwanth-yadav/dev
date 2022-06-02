package com.cool.proxy;

public class Vodaphone  implements ISP
{
    @Override
    public String getResource(String site) {
        switch (site) {
            case "www.google.com":
                return "GOOOGLE";
            case "www.yahoo.com":
                return "Yahooooooooooooo";
            default:
                return "Sorry no resource found";
        }

    }
}
