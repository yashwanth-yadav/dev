package com.zemoso.addressservice.entity;


import lombok.*;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "address")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "address_id", nullable = false)
    private int id;
    private  String userId;
    private String area;
    private int zipCode;
    private String city;
    private String houseNo;

}
