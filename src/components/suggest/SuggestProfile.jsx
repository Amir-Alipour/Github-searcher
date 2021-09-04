function SuggestProfile() {
    return (
        <div className="col-6 col-md-4 col-lg-3 col-xl-2 h-52 p-3">
            <div
                className="w-full h-full rounded p-2 cursor-pointer"
                style={{ backgroundColor: "#2d333b" }}
            >
                <div className="flex ">
                    <img
                        src="https://avatars.githubusercontent.com/u/1?v=4"
                        alt="profile"
                        className="w-16 h-16 rounded-lg shadow"
                    />

                    <p className="ml-2">mojombo</p>
                </div>

                <div className="mt-3 text-gray-300">
                    <p>following : 25</p>
                    <p>follwer : 542</p>
                    <p>repository : 65</p>
                </div>
            </div>
        </div>
    )
}

export default SuggestProfile
