import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.FC<any>;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}