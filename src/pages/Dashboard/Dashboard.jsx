import OptionBtn from "./components/OptionBtn";
import servers from "../../../Data/Servers";
import friends from "../../../assets/friends.svg";

const Dashboard = () => {
  return (
    <section className="dashboard bg-[#1E1F22] h-screen flex flex-row">
      {/* option bar */}
      <div className="option">
        <ul className="flex flex-col list-none h-screen space-y-8 py-5 px-2">
          {servers.map((server) => (
            <OptionBtn
              name={server.name}
              img={server.DP}
              link={server.linkTo}
            />
          ))}
        </ul>
      </div>
      <div className="bg-[#2B2D31] menu flex flex-col space-y-5 p-2 text-white w-72 ">
        <ul className="flex flex-col space-y-5">
          <li className="border-b border-black pb-3 ">
            <input
              type="text"
              name=""
              id=""
              placeholder="Find or start a conversation"
              className="bg-[#2e2d2f] w-full p-1 border border-black text-sm rounded-lg"
            />
          </li>
          <li className="p-2 rounded-md text-sm flex flex-row gap-x-4 justify-start align-center hover:bg-[#404249]">
            <div className="w-8">
              <svg aria-hidden="false" viewBox="0 0 24 24">
                <g fill="none" fill-rule="evenodd">
                  <path
                    fill="currentColor"
                    fill-rule="nonzero"
                    d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z"
                    transform="translate(2 4)"
                  ></path>
                  <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path>
                </g>
              </svg>
            </div>
            <p className="font-normal text-lg">Friends</p>
          </li>
          <li className="p-2 rounded-md text-sm flex flex-row gap-x-4 justify-start align-center hover:bg-[#404249]">
            <div className="w-8">
              <svg aria-hidden="false" viewBox="0 0 24 24" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <p className="font-normal text-lg">Stage Dicovery</p>
          </li>
          <li className="p-2 rounded-md text-sm flex flex-row gap-x-4 justify-start align-center hover:bg-[#404249]">
            <div className="w-8">
              <svg aria-hidden="false" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                ></path>
              </svg>
            </div>
            <p className="font-normal text-lg">Nitro</p>
          </li>
        </ul>
        <div>
          <p className="text-sm p-2 font-medium">
            Direct Messages{" "}
            <span className="ml-10 text-lg font-medium p-2">+</span>
          </p>
          <ul></ul>
        </div>
      </div>
      {/* main */}
      <div className="main bg-[#313338] w-full">
        <header>
          <ul className="list-none flex flex-row justify-start space-x-5 text-white ">
            <li>
              <img src={friends} alt="friends" />
              Friends
            </li>
            <li>Online</li>
            <li>All</li>
            <li>Pending</li>
            <li>Blocked</li>
            <li>
              <p>Add Friend</p>
            </li>
          </ul>
        </header>
        <main>
          <div></div>
          <div className="active"></div>
        </main>
      </div>
    </section>
  );
};

export default Dashboard;
