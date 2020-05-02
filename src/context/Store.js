import React, {createContext, useState} from 'react';

export const SelectedPostContext = createContext([]);
export const AllPostsContext = createContext([]);


function Store({children}) {

    const [allPosts, setAllPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState({});

    return (
        <AllPostsContext.Provider value={[allPosts, setAllPosts]}>
            <SelectedPostContext.Provider value={[selectedPost, setSelectedPost]}>
                {children}
            </SelectedPostContext.Provider>
        </AllPostsContext.Provider>
    );
}

export default Store;
