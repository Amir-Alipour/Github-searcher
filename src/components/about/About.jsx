import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

function About() {
    const [text, setText] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch(
            "https://raw.githubusercontent.com/amir-alipour/amir-alipour/master/README.md"
        )
            .then((res) => res.text())
            .then(txt => setText(txt))
    }, []);

    const handleSearch = (e) => {
        if(e.keyCode === 13){
            fetch(
                `https://raw.githubusercontent.com/${search}/${search}/master/README.md`
            )
                .then((res) => res.text())
                .then(txt => setText(txt))
        }
    }

    return (
        <div className="container" style={{ height: "80vh", color: "white" }}>
            <h1 className="mt-5 h1">About developer : </h1>
            <input type="text" value={search} onKeyDown={handleSearch} onChange={e => setSearch(e.target.value)} className="w-50 h-10 rounded-full bg-transparent border px-3 outline-none mt-3" placeholder="Search your README... (amir-alipour)" />

            <div className="row border rounded p-4 mt-4 mx-1">
                <div className="col-12" style={{height: '65vh', overflowY: "auto"}}>
                    <ReactMarkdown
                        rehypePlugins={[rehypeRaw]}
                        children={text}
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
