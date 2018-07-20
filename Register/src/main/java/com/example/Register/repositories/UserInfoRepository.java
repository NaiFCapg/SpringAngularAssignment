package com.example.Register.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Register.models.UserInfo;

public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {

}
