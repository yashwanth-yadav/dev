package com.zemoso.userservice.api.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;

@Entity
@Table(name="user")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @Column(name="user_id")
    private String userId;

    @Column(name="user_name")
    private String userName;

    @Column(name="email")
    private String email;
}
