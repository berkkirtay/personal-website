// Copyright(c) 2022 Berk Kırtay

const Image = ({ url }) => {
    return (
        <img src={url}
            width="80%" height="40%" style={{ display: "block", margin: "0 auto" }} />
    );
};

export default Image;
