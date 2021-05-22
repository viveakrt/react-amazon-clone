import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import { ShoppingBasket } from '@material-ui/icons'

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="hello"
            />
            <div className="header__search">
                <input className="header__searchInput"
                    type="text" />
                    <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello
                    </span>
                    <span className="header__optionLineTwo">
                        Guest
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Return
                    </span>
                    <span className="header__optionLineTwo">
                        & Order
                    </span> 
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>


                <div className="header__optionBasket">
                    <ShoppingBasket/>
                    <span className="header__optionLineTwo header__basketCount">
                        0
                    </span>

                </div>
            </div>
        </div>

    )
}

export default Header
