import { Button } from '@react-monorepo/shared';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-6">Welcome to shadcn Demo</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Explore a comprehensive showcase of shadcn components, beautifully designed and ready to use in your next project.
      </p>
      <Button 
        size="lg" 
        onClick={() => navigate('/home')}
        className="bg-white text-blue-600 hover:bg-blue-100"
      >
        Explore Components
      </Button>
    </div>
  );
};

export default LandingPage;

