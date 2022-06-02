package com.luv2code.springboot.thymeleafdemo.config;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;

import javax.sql.DataSource;


@Configuration
@EnableWebSecurity
public class DemoSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private DataSource dataSource;

    @Autowired
    public void configAuthentication(AuthenticationManagerBuilder auth) throws Exception {

        auth.jdbcAuthentication().dataSource(dataSource);

    }

//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//
//        // add our users for in memory authentication
//
//        User.UserBuilder users = User.withDefaultPasswordEncoder();
//
//        auth.inMemoryAuthentication()
//                .withUser(users.username("ram").password("test123").roles("USER"))
//                .withUser(users.username("ravi").password("test123").roles("USER"))
//                .withUser(users.username("rakesh").password("test123").roles("ADMIN"))
//                .withUser(users.username("raj").password("test123").roles("ADMIN"));
//    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.authorizeRequests()
                .antMatchers("/flights/list").permitAll()
                .antMatchers("/flights/showFormForUpdate/**").hasRole("ADMIN")
                .antMatchers("/flights/showFormForAdd/**").hasRole("ADMIN")
                .antMatchers("/").permitAll()
                .and().formLogin()
                .defaultSuccessUrl("/flights/list",true)
                .permitAll()
                .and().logout().permitAll();
    }



}