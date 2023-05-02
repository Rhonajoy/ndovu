import React from "react";
const Header = () => {
  return (
    <>
      <div className="flex flex-row place-content-center">
        <div>
          <p>
            13.21|23.8KB/s <box-icon name="alarm bx-xs"> </box-icon>
            <box-icon type="logo" name="android"></box-icon>
          </p>
        </div>
        <div>
          <box-icon name="signal-5"></box-icon>
          <box-icon name="wifi"></box-icon>
          <box-icon type="solid" name="battery-charging"></box-icon>
        </div>
      </div>
      <div class="flex flex-row place-content-center space-x-8">
        <div>
        <h2>
          Ndovu <span style={{color: 'red'}}>Pay</span>
        </h2>
        </div>
        
        <div>
        <box-icon type="solid" name="help-circle"></box-icon>
        <box-icon name="dots-vertical-rounded"></box-icon>
        </div>
        
      </div>
    </>
  );
};
export default Header;
