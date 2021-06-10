import React from "react";
import "./ProfileBio.css";

export const ProfileBio = ({ apiMediaUrls }) => {
  return (
    <div className="ProfileBio">
      <img
        className="bio-image"
        src={apiMediaUrls.urlBiographyImg1}
        alt="cat on balcony"
      />
      <p className="bio-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum
        nisi euismod, auctor velit commodo, vestibulum sem. Vestibulum venenatis
        condimentum lorem aliquet mollis. Sed eget lorem suscipit, sollicitudin
        nunc maximus, ullamcorper risus. Quisque enim sapien, porta eu lorem et,
        consectetur faucibus purus. Aliquam tempus nulla vel nisl finibus,
        laoreet consequat sapien aliquam. Pellentesque dapibus consectetur
        sapien, non elementum ligula pellentesque vitae. In hac habitasse platea
        dictumst. Mauris nec hendrerit orci. <br />
        <br /> Praesent iaculis aliquet metus, sit amet tempor risus cursus et.
        Nullam feugiat orci non aliquam vestibulum. Sed nisl mi, condimentum vel
        diam vel, aliquam varius orci. Phasellus ullamcorper pharetra risus eu
        hendrerit. Curabitur vel dolor neque. Pellentesque feugiat mauris id
        gravida luctus. Donec molestie lacus tincidunt felis elementum
        scelerisque. Maecenas orci odio, finibus quis ante ut, pharetra
        malesuada mauris. Sed vel diam magna. Aliquam erat volutpat. Duis a
        augue eu odio eleifend pretium. Ut erat quam, elementum vitae porttitor
        in, elementum dapibus lorem. Nunc eleifend urna eu neque rutrum, id
        congue sem tempus. Integer iaculis tempor nisi, et euismod enim semper
        vitae. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Maecenas eu sem arcu. Sed in magna
        eget orci placerat consectetur. Praesent tempor quis elit ut convallis.{" "}
        <br />
        <br /> Cras imperdiet ultrices lorem, sed fringilla nibh pretium et.
        Maecenas tristique dictum purus. Etiam pellentesque non elit vitae
        placerat. Nunc ac lectus ligula. Morbi sed sapien luctus, mattis mauris
        ultrices, rutrum mauris. Nam ut placerat justo, non aliquet ante. Nulla
        scelerisque vehicula orci eu laoreet. Proin ex libero, luctus eget
        turpis eu, porttitor convallis dolor. Nam sit amet nisi convallis,
        rhoncus mauris eget, dictum sapien.
      </p>
    </div>
  );
};
