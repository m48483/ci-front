import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { delBoard, delByBoard, getBoard, saveBoard } from "../public/api/auth";

function App() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [boards, setBoards] = useState([]);
  const [selectedBoardId, setSelectedBoardId] = useState(null);

  useEffect(() => {
    fetchBoards();
  }, []);

  const fetchBoards = async () => {
    try {
      const res = await getBoard();
      if (res.status === 200) {
        setBoards(res.data);
      }
    } catch (error) {
      console.error(error);
      alert("게시글 가져오기 실패");
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (name === "" || content === "") alert("빈칸 없이 적으셈");
    else {
      try {
        const res = await saveBoard({ name, content });
        if (res.status === 200) {
          fetchBoards();
        }
      } catch (error) {
        console.error(error);
        alert("게시글 저장 실패");
      }
    }
  };

  const boardClear = async (event) => {
    event.preventDefault();

    try {
      const res = await delBoard();
      if (res.status === 200) {
        fetchBoards();
      }
    } catch (error) {
      console.error(error);
      alert("게시글 삭제 실패");
    }
  };

  const delOne = async (id) => {
    console.log(id);
    try {
      const res = await delByBoard(id);
      if (res.status === 200) {
        fetchBoards();
      }
    } catch (error) {
      console.error(error);
      alert("게시글 삭제 실패");
    }
  };

  const handleHover = (id) => {
    setSelectedBoardId(id === selectedBoardId ? null : id);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <button type="submit">submit</button>
      </form>
      <button onClick={boardClear}>clear</button>
      <div>
        {boards.map((board) => (
          <div key={board.id}>
            <button
              id={board.id}
              onMouseEnter={() => handleHover(board.id)}
              onMouseLeave={() => handleHover(null)}
              style={{
                transform:
                  selectedBoardId === board.id ? "scale(0.8)" : "scale(1)",
                transition: "transform 0.3s ease",
              }}
            >
              <strong>{board.name}</strong>: {board.content}
            </button>
            <button onClick={() => delOne(board.id)}>X</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
