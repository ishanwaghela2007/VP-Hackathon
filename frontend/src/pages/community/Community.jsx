import React from 'react';

const CommunityPage = () => {
  const founder = {
    name: 'John Doe',
    bio: 'Founder of FitnessPro Community. Passionate about helping others achieve their fitness goals.',
    avatar: 'https://media.istockphoto.com/id/1336230140/photo/portrait-of-a-happy-mature-man-of-indian-ethnicity.jpg?s=612x612&w=0&k=20&c=TNFicavabSAoGlBtx0RaQxPObIX-O50CCGLO-dvuaD8=0',
  };

  const communityMembers = [
    { name: 'FitAlex', avatar: 'https://media.istockphoto.com/id/1213291408/photo/happy-senior-man-at-park.jpg?s=612x612&w=0&k=20&c=6Ja6que7ELmcxA4zVwhyd-bqM-6C_gE8dqFQMb3noaM=' },
    { name: 'HealthyAnna', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOOszjtld5dtZqZlWOfSv2p6jRYdZBhzFLQA&s' },
    { name: 'YogaLover', avatar: 'https://media.istockphoto.com/id/1213300831/photo/senior-woman-looking-at-camera.jpg?s=612x612&w=0&k=20&c=5PoBMM0PNjh3wffxbWGIO6-gjc0M8t6ukOPsekRBlzc='},
    { name: 'GymBuff', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4bvKrFpC7vEbpCLXTO4MYiIHppHlqSHFA8A&s' },
  ];

  const communityPosts = [
    {
      username: 'FitAlex',
      avatar: 'https://media.istockphoto.com/id/1213291408/photo/happy-senior-man-at-park.jpg?s=612x612&w=0&k=20&c=6Ja6que7ELmcxA4zVwhyd-bqM-6C_gE8dqFQMb3noaM=',
      post: 'Just completed a 5K run today! Feeling great and ready for more!',
      timestamp: '2 hours ago',
    },
    {
      username: 'HealthyAnna',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOOszjtld5dtZqZlWOfSv2p6jRYdZBhzFLQA&s',
      post: 'Does anyone have good protein shake recipes? I’m looking for new ideas!',
      timestamp: '4 hours ago',
    },
    {
      username: 'YogaLover',
      avatar: 'https://media.istockphoto.com/id/1213300831/photo/senior-woman-looking-at-camera.jpg?s=612x612&w=0&k=20&c=5PoBMM0PNjh3wffxbWGIO6-gjc0M8t6ukOPsekRBlzc=',
      post: 'Loving my new yoga routine. It’s so relaxing and energizing at the same time.',
      timestamp: '6 hours ago',
    },
  ];

  return (
    <div className="bg-gray-100 flex justify-center min-h-screen p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 space-y-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500 mt-4">{founder.name}</h2>
          <p className="text-gray-700 mt-2">{founder.bio}</p>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Community Members</h3>
          <div className="flex justify-center space-x-4">
            {communityMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.avatar}
                  alt={`${member.name}'s avatar`}
                  className="w-12 h-12 rounded-full object-cover object-center"
                />
                <p className="text-gray-700 mt-2">{member.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Community Posts</h3>
          <div className="space-y-6">
            {communityPosts.map((post, index) => (
              <div key={index} className="flex items-start space-x-4">
                <img
                  src={post.avatar}
                  alt={`${post.username}'s avatar`}
                  className="w-12 h-12 rounded-full object-cover object-center"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-gray-800">{post.username}</h4>
                    <span className="text-sm text-gray-500">{post.timestamp}</span>
                  </div>
                  <p className="text-gray-700 mt-2">{post.post}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
