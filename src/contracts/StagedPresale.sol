/**
 *Submitted for verification at Etherscan.io on 2023-02-12
*/

// SPDX-License-Identifier: MIT
// File: https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Context.sol


// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)

pragma solidity ^0.8.0;

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}

// File: https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol


// OpenZeppelin Contracts (last updated v4.7.0) (access/Ownable.sol)

pragma solidity ^0.8.0;


/**
 * @dev Contract module which provides a basic access control mechanism, where
 * there is an account (an owner) that can be granted exclusive access to
 * specific functions.
 *
 * By default, the owner account will be the one that deploys the contract. This
 * can later be changed with {transferOwnership}.
 *
 * This module is used through inheritance. It will make available the modifier
 * `onlyOwner`, which can be applied to your functions to restrict their use to
 * the owner.
 */
abstract contract Ownable is Context {
    address private _owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    /**
     * @dev Initializes the contract setting the deployer as the initial owner.
     */
    constructor() {
        _transferOwnership(_msgSender());
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        _checkOwner();
        _;
    }

    /**
     * @dev Returns the address of the current owner.
     */
    function owner() public view virtual returns (address) {
        return _owner;
    }

    /**
     * @dev Throws if the sender is not the owner.
     */
    function _checkOwner() internal view virtual {
        require(owner() == _msgSender(), "Ownable: caller is not the owner");
    }

    /**
     * @dev Leaves the contract without owner. It will not be possible to call
     * `onlyOwner` functions anymore. Can only be called by the current owner.
     *
     * NOTE: Renouncing ownership will leave the contract without an owner,
     * thereby removing any functionality that is only available to the owner.
     */
    function renounceOwnership() public virtual onlyOwner {
        _transferOwnership(address(0));
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Can only be called by the current owner.
     */
    function transferOwnership(address newOwner) public virtual onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        _transferOwnership(newOwner);
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Internal function without access restriction.
     */
    function _transferOwnership(address newOwner) internal virtual {
        address oldOwner = _owner;
        _owner = newOwner;
        emit OwnershipTransferred(oldOwner, newOwner);
    }
}

// File: https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/IERC20.sol


// OpenZeppelin Contracts (last updated v4.6.0) (token/ERC20/IERC20.sol)

pragma solidity ^0.8.0;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20 {
    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);

    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `from` to `to` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);
}

// File: contracts/TokenSale.sol



pragma solidity ^0.8.0;




contract TokenSale is Ownable {

    uint public rateStage1BNB = 0.001 ether;
    uint public rateStage2BNB = 0.001 ether;
    uint public rateStage3BNB = 0.001 ether;
    uint public rateStage4BNB = 0.001 ether;
    uint public rateStage5BNB = 0.001 ether;
    uint public rateStage6BNB = 0.001 ether;

    uint public rateStage1Usdt = 1 * 10 **18;
    uint public rateStage2Usdt = 1 * 10 **18;
    uint public rateStage3Usdt = 1 * 10 **18;
    uint public rateStage4Usdt = 1 * 10 **18;
    uint public rateStage5Usdt = 1 * 10 **18;
    uint public rateStage6Usdt = 1 * 10 **18;

    uint public endTime1;
    uint public endTime2;
    uint public endTime3;
    uint public endTime4;
    uint public endTime5;
    uint public endTime6;



    uint public totalSold;

    uint public stage1 = 5_000_000e18;
    uint public stage2 = 2_500_000e18;
    uint public stage3 = 2_150_000e18;
    uint public stage4 = 2_000_000e18;
    uint public stage5 = 1_600_000e18;
    uint public stage6 = 1_600_000e18;

    uint public minPurchaseAmount = 0.001 ether;
    uint public minPurchaseAmountUsdt = 1 * 10 **18 ; // chnage based with usdc/usdt decimals

    uint public tokenSolds1;
    uint public tokenSolds2;
    uint public tokenSolds3;
    uint public tokenSolds4;
    uint public tokenSolds5;
    uint public tokenSolds6;


    IERC20 public token;
    IERC20 public usdt;
    IERC20 public usdc;

    event Purchased(address account, uint amount, uint purchaseTime);

    constructor(address _token,
     address _usdt,
     address _usdc
     
    ) {

        token = IERC20(_token);
        usdt = IERC20(_usdt);
        usdc = IERC20(_usdc);

        
        // setting the start time

        endTime1 = block.timestamp + 10 days;
        endTime2 = endTime1 + 10 days;
        endTime3 = endTime2 + 10 days;
        endTime4 = endTime3 + 10 days;
        endTime5 = endTime4 + 10 days;
        endTime6 = endTime5 + 10 days;

        

    }

    /*//////////////////////////////////////////////////////////////
                               PRESALE
    //////////////////////////////////////////////////////////////*/

    function buyFromNative(address referral) public payable {

        require(msg.value>= minPurchaseAmount, "Imvalid paynment Amount");

        uint stage = currentStage();
        require(stage != 0, "All stages are completed");
        uint rate;
        uint amount;
        
        if(stage == 1) {

            rate = rateStage1BNB;
            amount = ((msg.value*10**18) / rate);
            require(tokenSolds1 + amount<=stage1, 'NEED TO COMPLETE STAGE 1');
            tokenSolds1 += amount;

        } else if(stage == 2) {

            rate = rateStage2BNB;
            amount = ((msg.value*10**18) / rate);
            require(tokenSolds2+ amount<=stage2, 'NEED TO COMPLETE STAGE 2');
            tokenSolds2 += amount;

        } else if(stage == 3){

            rate = rateStage3BNB;
            amount = ((msg.value*10**18) / rate);
            require(tokenSolds3 + amount<=stage3, 'NEED TO COMPLETE STAGE 3');
            tokenSolds3 += amount;

        } else if(stage == 4){

            rate = rateStage4BNB;
            amount = ((msg.value*10**18) / rate);
            require(tokenSolds4 + amount<=stage4, 'NEED TO COMPLETE STAGE 4');
            tokenSolds4 += amount;

        } else if(stage == 5){

            rate = rateStage5BNB;
            amount = ((msg.value*10**18) / rate);
            tokenSolds5 += amount;
            require(tokenSolds5 + amount<=stage5, 'NEED TO COMPLETE STAGE 5');
        } else if(stage == 6){

            rate = rateStage6BNB;
            amount = ((msg.value*10**18) / rate);
            tokenSolds5 += amount;
            require(tokenSolds6 + amount<=stage6, 'NEED TO COMPLETE STAGE 6');
        }

        require(totalSold + amount <= stage1 + 
        stage2 + 
        stage3 + 
        stage4 + 
        stage5 + stage6, "SALE_ENDED");
        require(msg.value >= minPurchaseAmount, "INVALID_AMOUNT");

        

        unchecked {
            totalSold = totalSold + amount;
        }

        uint referAmount = 0;
        if(referral != address(0)) {
            referAmount = (msg.value * 20) / 100;
            (bool referOk, ) = payable(referral).call{value: referAmount}("");
            require(referOk, "REFER_FAILED");
        }

        (bool ok, ) = payable(owner()).call{value: msg.value - referAmount}("");
        token.transfer(msg.sender, amount);
        require(ok, "PRICE_TRANSFER_FAILED");

        emit Purchased(msg.sender, amount, block.timestamp);
    }


    function buyFromUSDT(address referral, uint _amount, uint paymentType) public {

        require(_amount>= minPurchaseAmountUsdt, "Imvalid paynment Amount");

        uint stage = currentStage();
        require(stage != 0, "All stages are completed");
        uint rate;
        uint amount;

        if(paymentType == 1){
            usdt.transferFrom(msg.sender, address(this), _amount);
        }else{
            usdc.transferFrom(msg.sender, address(this), _amount);
        }
        
        if(stage == 1) {

            rate = rateStage1Usdt;
            amount = ((_amount*10**18) / rate);
            require(tokenSolds1 + amount<=stage1, 'NEED TO COMPLETE STAGE 1');
            tokenSolds1 += amount;

        } else if(stage == 2) {

            rate = rateStage2Usdt;
            amount = ((_amount*10**18) / rate);
            require(tokenSolds2+ amount<=stage2, 'NEED TO COMPLETE STAGE 2');
            tokenSolds2 += amount;

        } else if(stage == 3){

            rate = rateStage3Usdt;
            amount = ((_amount*10**18) / rate);
            require(tokenSolds3 + amount<=stage3, 'NEED TO COMPLETE STAGE 3');
            tokenSolds3 += amount;

        } else if(stage == 4){

            rate = rateStage4Usdt;
            amount = ((_amount*10**18) / rate);
            require(tokenSolds4 + amount<=stage4, 'NEED TO COMPLETE STAGE 4');
            tokenSolds4 += amount;

        } else if(stage == 5){

            rate = rateStage5Usdt;
            amount = ((_amount*10**18) / rate);
            tokenSolds5 += amount;
            require(tokenSolds5 + amount<=stage5, 'NEED TO COMPLETE STAGE 5');
        } else if(stage == 6){

            rate = rateStage6Usdt;
            amount = ((_amount*10**18) / rate);
            tokenSolds6 += amount;
            require(tokenSolds6 + amount<=stage6, 'NEED TO COMPLETE STAGE 6');
        }

        require(totalSold + amount <= stage1 + 
        stage2 + 
        stage3 + 
        stage4 + 
        stage5 + stage6, "SALE_ENDED");
        require(_amount >= minPurchaseAmount, "INVALID_AMOUNT");

        

        unchecked {
            totalSold = totalSold + amount;
        }

    

        if(paymentType == 1){
                usdt.transfer(owner(), amount);
            }else{
                usdc.transfer(owner(), amount);
            }
        token.transfer(msg.sender, amount);
        
        emit Purchased(msg.sender, amount, block.timestamp);
    }

    function currentStage() public view returns (uint) {

        uint stage;

        if(block.timestamp <= endTime1) {
            stage = 1;
        } else if(block.timestamp <= endTime2) {
            stage = 2;
        } else if(block.timestamp <= endTime3) {
            stage = 3;
        }
         else if(block.timestamp <= endTime4){
            stage = 4;
         }else if(block.timestamp <= endTime5){
            stage = 5;
         }else if(block.timestamp <= endTime6){
            stage =  6;
         }
        return stage;
    }


    /*//////////////////////////////////////////////////////////////
                          ONLY CONTRACT OWNER
    //////////////////////////////////////////////////////////////*/


    // do not modify limit for a stage that has passed
    function setTokenLimitsPerStage(

    uint _stage1,
    uint _stage2,
    uint _stage3,
    uint _stage4,
    uint _stage5,
    uint _stage6
    
    ) external onlyOwner {

        stage1 = _stage1;
        stage2 = _stage2;
        stage3 = _stage3;
        stage4 = _stage4;
        stage5 = _stage5;
        stage6 = _stage6;

    }

    function setPurchaseLimits(uint min) external onlyOwner {
        minPurchaseAmount = min;
    }
 
    function setRatesBNB(uint _rate1, uint _rate2, uint _rate3, uint _rate4, uint _rate5, uint _rate6) external onlyOwner {

        rateStage1BNB = _rate1;
        rateStage2BNB = _rate2;
        rateStage3BNB = _rate3;
        rateStage4BNB = _rate4;
        rateStage5BNB = _rate5;
        rateStage6BNB = _rate6;
        
    }

    function withdrawTokens(uint amount) external onlyOwner {
        token.transfer(msg.sender, amount);
    }

    function withdraw() external onlyOwner{
        payable (msg.sender).transfer(address(this).balance);
    }

    function withdrawUSDT(uint amount) external onlyOwner {
        usdt.transfer(msg.sender, amount);
    }

    function withdrawUSDC(uint amount) external onlyOwner {
        usdc.transfer(msg.sender, amount);
    }
}