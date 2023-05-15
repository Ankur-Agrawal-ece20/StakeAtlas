import { Gallery, Item } from "react-photoswipe-gallery"
import "photoswipe/dist/photoswipe.css"

export default function ImageGallery({ images, imageCount }) {

  var galleryJSX = []

  const smallItemStyles = {
    cursor: "pointer",
    objectFit: "cover",
    width: "100%",
    maxHeight: "100%",
  };

  galleryJSX.push(
    <Item
      original={images.main}
      thumbnail={images.main}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img
          ref={ref}
          onClick={open}
          src={images.main}
          alt="main"
          className="object-cover cursor-pointer w-full h-full"
        />
      )}
    </Item>
  )

  for (const image in images) {
    if (image !== 'main' && image !== 'all') {
      if (image === 'images') {
        images[image].map((image) => {
          return galleryJSX.push(
            <Item
              original={image}
              thumbnail={image}
              width="1024"
              height="768"
            >
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  alt={image}
                  src={image}
                  className="object-cover w-full h-full"
                />
              )}
            </Item>
          )
        })
      } else {
        galleryJSX.push(
          <Item
            original={images[image][0]}
            thumbnail={images[image][0]}
            width="1024"
            height="768"
          >
            {({ ref, open }) => (
              <div ref={ref} onClick={open} className="relative w-full h-full">
                <div className="absolute flex items-center justify-center w-full h-full bg-black bg-opacity-50 z-10">
                  <p className="text-white text-xl">{image.charAt(0).toUpperCase()}{image.slice(1)} ({images[image].length})</p>
                </div>
                <img
                  src={images[image][0]}
                  alt={image}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
          </Item>
        )


        images[image].map((image) => {
          return galleryJSX.push(
            <Item
              original={image}
              thumbnail={image}
              width="1024"
              height="768"
            >
              {({ ref, open }) => (
                <div ref={ref} onClick={open} className="hidden" />
              )
              }
            </Item>
          )
        })
      }
    }
  }

  galleryJSX.push(
    <Item
      original={images.all}
      thumbnail={images.all}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div ref={ref} onClick={open} className="relative w-full h-full">
          <div className="absolute w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-10">
            <p className="text-white text-xl">All ({imageCount})</p>
          </div>
          <img
            src={images.all}
            alt="all"
            className="object-cover w-full h-full"
          />
        </div>
      )}
    </Item>
  )

  return (
    <div className="w-full">
      <Gallery>
        <div className="flex md:w-[95%] w-full mx-auto space-x-2">
          <div className="md:w-10/12 w-full">
            {galleryJSX[0]}
          </div>
          <div className="md:flex hidden w-2/12 flex-col space-y-2 justify-between">
            {galleryJSX.slice(1, galleryJSX.length)}
          </div>
        </div>
      </Gallery>
    </div>
  )

}
