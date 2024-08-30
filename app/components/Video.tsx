import React from "react";

const Video = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Who Are We ??
            </h2>
          </div>
          <div className="flex items-center justify-center mt-10">
            <iframe
              src="https://drive.google.com/file/d/1MEse-LCsKU5KvMjODoVSrnOhJJVWKv4b/preview"
              width="640"
              height="480"
              allow="autoplay"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
