package com.example.Register.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.Register.models.UserInfo;
import com.example.Register.repositories.UserInfoRepository;

@RestController
@RequestMapping("/api/UsersInfo")
public class UserInfoController {
	@Autowired
	private UserInfoRepository userInfoRepository;
	
	@GetMapping
	public List<UserInfo> list(){
		return userInfoRepository.findAll();
	}
	
	@PostMapping("/register")
	@ResponseStatus(HttpStatus.OK)
	public void create(@Valid@RequestBody UserInfo userInfo) {
		userInfoRepository.save(userInfo);
	}
	
	@GetMapping("/{id}")
	public UserInfo get(@PathVariable("id") long id) {
		return userInfoRepository.getOne(id);
	}
}
