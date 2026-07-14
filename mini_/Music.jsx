import { useState, useEffect, useRef } from "react";
import * as Tone from "tone";

const TRACKS = [
  { name: "반짝반짝 작은 별", notes: ["C4","C4","G4","G4","A4","A4","G4",null,"F4","F4","E4","E4","D4","D4","C4",null] },
  { name: "학교종", notes: ["G4","G4","A4","A4","G4","G4","E4",null,"G4","G4","E4","E4","D4",null,null,null] },
  { name: "비행기", notes: ["E4","D4","C4","D4","E4","E4","E4",null,"D4","D4","D4",null,"E4","G4","G4",null] },
];

function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [idx, setIdx] = useState(0);
  const synthRef = useRef(null);
  const seqRef = useRef(null);

  const stop = () => {
    seqRef.current?.dispose();
    Tone.Transport.stop();
    Tone.Transport.cancel();
    setPlaying(false);
  };

  const play = async (trackIdx = idx) => {
    await Tone.start();
    seqRef.current?.dispose();
    Tone.Transport.cancel();
    if (!synthRef.current) {
      synthRef.current = new Tone.Synth({ oscillator: { type: "triangle" } }).toDestination();
    }
    const seq = new Tone.Sequence(
      (time, note) => { if (note) synthRef.current.triggerAttackRelease(note, "8n", time); },
      TRACKS[trackIdx].notes,
      "4n"
    );
    seq.loop = true;
    seq.start(0);
    seqRef.current = seq;
    Tone.Transport.bpm.value = 100;
    Tone.Transport.start();
    setPlaying(true);
  };

  const next = () => {
    const n = (idx + 1) % TRACKS.length;
    setIdx(n);
    if (playing) play(n);
  };

  useEffect(() => () => { stop(); synthRef.current?.dispose(); }, []);

  return (
    <div className="card player">
      <h2 style={{ justifyContent: "center" }}>🎵 음악 플레이어</h2>
      <div className="tag">신디사이저로 멜로디 재생 (소리 켜기)</div>
      <div className={`disc ${playing ? "spin" : ""}`}>💿</div>
      <div className="track-name">{TRACKS[idx].name}</div>
      <div className="track-sub">트랙 {idx + 1} / {TRACKS.length}</div>
      <div className="row">
        <button className="btn" onClick={() => (playing ? stop() : play())}>
          {playing ? "⏸ 일시정지" : "▶ 재생"}
        </button>
        <button className="btn ghost" onClick={next}>⏭ 다음 곡</button>
      </div>
    </div>
  );
}

export default MusicPlayer;
