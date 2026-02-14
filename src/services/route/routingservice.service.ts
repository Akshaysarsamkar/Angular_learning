import { Injectable } from '@angular/core';
import { User } from '../../enum/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RoutingserviceService {

  constructor() { }

  private users: User[] = [
    {
      id: 1,
      name: 'Akshay Sarsamkar',
      age: 26,
      country: 'India',
      companyName: 'TechNova Solutions',
      address: 'Mumbai, Maharashtra',
      salary: 85000,
      email: 'akshay@technova.com',
      phone: '+91 9876543210',
      department: 'Frontend',
      image: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_user_personalization&w=740&q=80'
    },
    {
      id: 2,
      name: 'John Carter',
      age: 30,
      country: 'USA',
      companyName: 'GlobalSoft Inc.',
      address: 'New York',
      salary: 120000,
      email: 'john@globalsoft.com',
      phone: '+1 234567890',
      department: 'Backend',
      image: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_user_personalization&w=740&q=80'
    },
    {
      id: 3,
      name: 'Priya Sharma',
      age: 28,
      country: 'India',
      companyName: 'NextGen Labs',
      address: 'Bangalore, Karnataka',
      salary: 95000,
      email: 'priya@nextgen.com',
      phone: '+91 9123456789',
      department: 'UI/UX',
      image: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_user_personalization&w=740&q=80'
    }
  ];



  getAllDetails() {
    return this.users;
  }
}
