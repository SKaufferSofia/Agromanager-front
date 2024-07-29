"use client";

const ProfileComponent = () => {
  return (
    <div className="w-full lg:w-1/3 mx-auto">
      <div className="card card-profile">
        <img
          src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/img-1-1000x600.jpg"
          alt="Image placeholder"
          className="card-img-top w-full"
        />
        <div className="flex justify-center mt-4">
          <div className="lg:w-1/3">
            <div className="card-profile-image">
              <a href="#">
                <img
                  src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
                  className="rounded-full w-24 h-24"
                  alt="Profile"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="card-header text-center border-0 pt-8 pb-0">
          <div className="flex justify-between">
            <a href="#" className="btn btn-sm btn-default">
              Connect
            </a>
            <a href="#" className="btn btn-sm btn-warning">
              Message
            </a>
          </div>
        </div>
        <div className="card-body pt-0">
          <div className="flex justify-center">
            <div>
              <div className="card-profile-stats flex justify-center space-x-8">
                <div className="text-center">
                  <span className="heading">22</span>
                  <span className="description">Friends</span>
                </div>
                <div className="text-center">
                  <span className="heading">10</span>
                  <span className="description">Photos</span>
                </div>
                <div className="text-center">
                  <span className="heading">89</span>
                  <span className="description">Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <h5 className="text-xl font-bold">
              Jessica Jones <span className="font-light">, 27</span>
            </h5>
            <h6 className="font-light">Bucharest, Romania</h6>
            <h6 className="mt-4">Solution Manager - Creative Tim Officer</h6>
            <h6>University of Computer Science</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
