package com.luv2code.springboot.thymeleafdemo;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;


@SpringBootTest
class BookstoreApplicationTest {

    @Test
    void main() {
        String[] args = new String[0];
        ThymeleafdemoApplication.main(args);
        assertEquals(args, ThymeleafdemoApplication.args2);
    }
}
