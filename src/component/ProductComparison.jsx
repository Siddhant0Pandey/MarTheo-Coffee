function ProductComparison() {
  return (
    <div className="w-[80vw] h-[90vh] mx-auto mt-[3vh]">
      <div className="my-10">
        <h1 className="text-center font-bold text-3xl mb-5">
          Product Comparison
        </h1>
        <h5 className="text-center opacity-90 font-thin pb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          delectus maxime sint ipsa voluptates. Excepturi impedit et quasi
          laudantium cumque est? Provident amet dignissimos obcaecati labore
          consequatur molestias sint soluta.
        </h5>
      </div>
      <div className="flex gap-10 md:flex-nowrap flex-wrap">
        <div className="card px-8 bg-fade pt-8 pb-[7rem]">
          <h1 className="font-bold text-2xl mb-6">Prouduct One</h1>
          <p className="opacity-90">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
            nam.
          </p>
          <button className="px-6 py-3 bg-primary border text-white mt-6 hover:border hover:text-primary hover:bg-white">
            Learn More
          </button>
          <hr className="mt-8" />
          <h3 className="list-none mt-6 font-bold">
            <li className="">$10 Minimum Requirement</li>
            <li>No balance required</li>
            <li>balance required</li>
          </h3>
        </div>

        <div>
          <div className="bg-primarydark px-5 py-1 font-thin text-white flex-shrink-0">
            Most Popular
          </div>
          <div className="card px-8 bg-primary2 text-white pt-8 pb-[8rem]">
            <h1 className="font-bold text-2xl mb-6">Prouduct One</h1>
            <p className="opacity-90">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident, nam.
            </p>
            <button className="px-6 py-3 bg-white border text-primary2 mt-6 hover:bg-primary2 hover:text-white hover:border">
              Learn More
            </button>
            <hr className="mt-8" />
            <h3 className="list-none mt-6 font-bold">
              <li className="">$10 Minimum Requirement</li>
              <li>No balance required</li>
              <li>balance required</li>
            </h3>
          </div>
        </div>

        <div className="card px-8 bg-fade pt-8 pb-[8rem]">
          <h1 className="font-bold text-2xl mb-6">Prouduct One</h1>
          <p className="opacity-90">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
            nam.
          </p>
          <button className="px-6 py-3 bg-primary border text-white mt-6 hover:border hover:text-primary hover:bg-white">
            Learn More
          </button>
          <hr className="mt-8" />
          <h3 className="list-none mt-6 font-bold">
            <li className="">$10 Minimum Requirement</li>
            <li>No balance required</li>
            <li>balance required</li>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ProductComparison;
