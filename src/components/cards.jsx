import React from "react";
const Card = () => {
  const imageURL =
    "https://images.pexels.com/photos/955388/pexels-photo-955388.jpeg?auto=compress&cs=tinysrgb&w=600";
  return (
    <>
      <div className="flex flex-col font-poppins">
        <div className="w-full  mx-96 mb-8 p-2 place-content-center h-32 w-3/6 bg-orange-900  shadow-xl lg:flex lg:max-w-lg rounded-md place-content-center">
          <div className="pl-2">
            <p className="text-yellow-400 text-center">50</p>
            <p className="text-white text-center">
              Held Balance <br />
              KES
            </p>
          </div>
          <div>
            <p className="text-yellow-400">50</p>
            <p className="text-white">
              Held Balance <br />
              KES
            </p>
          </div>
        </div>

        <div class="flex flex-row flex space-x-4  mb-8 place-content-center">
          <div className=" p-4 shadow-md lg:max-w-lg h-52 w-52 bg-[#E12908] rounded-md">
            <div className="space-y-2">
              {/* <h3 className="text-2xl font-semibold">
                React Tailwind Card Title
              </h3> */}
              <p className="text-white text-center">
                Join& Pay <br />
                Transcation
              </p>
            </div>
          </div>
          <div className=" p-4 shadow-md lg:max-w-lg h-52 w-52 bg-[#FFB900] rounded-md">
            <p className="text-white text-center">
              Accept|Reject <br></br>Delivery
            </p>
          </div>
        </div>
        <div class="flex flex-row flex space-x-4  place-content-center">
          <div className=" p-4 shadow-md lg:max-w-lg  mb-8 h-52 w-52 bg-[#181414] rounded-md relative">
          <div class="p-10 w-px h-px rounded-full bg-transparent border-2 border-white text-white absolute top-2 right-2">
            <p className="text-white text-start">11</p>
            
            </div>
            <div className="space-y-2">
             
              <p className="text-white text-center absolute bottom-20 left-4">My Transactions</p>
            </div>
          </div>
          
          <div className=" p-4 shadow-md lg:max-w-lg h-52 w-52 bg-[#7B8C8F] rounded-md bg-[url('')]">
            <p className="text-white text-center">Invite to Earn</p>
          </div>
        </div>
        <div
          className="w-full 
         mx-96 mb-8 p-2 place-content-center h-44 w-1/2 bg-orange-900  shadow-xl lg:flex lg:max-w-lg rounded-md place-content-center
         bg-cover bg-center"
          style={{
            backgroundImage: `url(${imageURL})`,
          }}
        >
          <p className="text-white text-center font-semibold text-4xl	">
            Shop <br />
            with Confidence
            <br />
            <span className="text-amber-400 text-sm		"> Your money is safe</span>
          </p>
        </div>
      </div>
    </>
  );
};
export default Card;
