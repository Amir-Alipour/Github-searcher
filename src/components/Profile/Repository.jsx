import { recomposeColor, Tooltip } from "@material-ui/core";
import moment from "moment";

const EyeIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
    </svg>
);

const LanIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
    </svg>
);

const ForkIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
        />
    </svg>
);

function Repository({ rep }) {
    return (
        <div className="col-12 col-lg-6 p-3" style={{ height: "200px" }}>
            <div
                className="w-full h-full rounded-md container-fluid p-3 shadow"
                style={{ border: "1px solid rgba(255,255,255,0.4)" }}
            >
                <div className="row">
                    <div className="col-12 flex justify-content-between">
                            <p className="h6 flex">
                                <Tooltip title={rep.description} placement="top">
                                    <a href={rep.html_url} target="_blank" rel="noreferrer" className="text-white hover:underline">
                                        {rep.name}{" "}
                                    </a>
                                </Tooltip>
                                <p className="ml-1 text-sm text-gray-400">
                                    {rep.fork && "(forked)"}
                                </p>
                            </p>

                        <p className="text-gray-400 text-sm">{rep.id} ID</p>
                    </div>

                    <div className="col-12 flex justify-content-between">
                        <p className="text-gray-500">{rep.full_name}</p>

                        <p className="text-gray-400">{rep.default_branch}</p>
                    </div>

                    <div className="col-12 flex justify-content-between">
                        <p className="text-gray-500">
                            {moment(rep.created_at).from()}
                        </p>
                    </div>

                    <div className="col-12 mt-4 flex justify-content-between">
                        <div className="text-gray-300 flex">
                            <EyeIcon />
                            <p className="ml-2">{rep.watchers}</p>
                        </div>

                        <div className="text-gray-300 flex">
                            <LanIcon />
                            <p className="ml-2">{rep.language}</p>
                        </div>

                        <div className="text-gray-300 flex">
                            <ForkIcon />
                            <p className="ml-2">{rep.forks}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Repository;
