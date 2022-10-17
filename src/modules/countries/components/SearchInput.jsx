import React from 'react';
import { Icon } from "@iconify/react";

const SearchInput = ({ searchTerm, onChangeHandler, submitHandler }) => {
    return (
        <form onSubmit={submitHandler} className="pb-6">
            <div className="flex justify-center gap-1">
                <div className="relative w-6/12">
                    <label htmlFor="search">
                        <Icon
                            className="searchIcon"
                            icon="bi:search-heart"
                        />
                    </label>
                    <input
                        className="inputStyle"
                        placeholder="Search for anything..."
                        type="text"
                        id="search"
                        name="search"
                        value={searchTerm}
                        onChange={onChangeHandler}
                    />
                </div>
                <button className="btn" type="submit">
                    Search
                </button>
            </div>
        </form>
    )
}

export default SearchInput;