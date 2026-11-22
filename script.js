                >
                    Pilih tanggal yang memiliki jadwal di atas untuk melihat kedua regu.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                    {selectedShifts.map((team, i) => (
                        <div
                            key={i}
                            style={{
                                flex: "1 1 240px",
                                minWidth: 0,
                                background: colors[i].bg,
                                borderRadius: 12,
                                padding: 20,
                                boxSizing: "border-box",
                            }}
                        >
                            <h3
                                style={{
                                    color: colors[i].ink,
                                    fontSize: 13,
                                    margin: "0 0 14px",
                                    letterSpacing: 0.5,
                                }}
                            >
                                {i === 0
                                    ? "SHIFT SIANG · 4 ORANG"
                                    : "SHIFT MALAM · 3 ORANG"}
                            </h3>
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 8,
                                }}
                            >
                                {team.map((p) => (
                                    <span
                                        key={p}
                                        style={{
                                            background: "#FFFFFF",
                                            color: colors[i].ink,
                                            borderRadius: 6,
                                            padding: "9px 12px",
                                            fontSize: 13,
                                            fontWeight: 600,
                                        }}
                                    >
                                        {p}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <footer
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 16,
                    flexWrap: "wrap",
                    marginTop: 22,
                    color: "#7D888E",
                    fontSize: 12,
                    lineHeight: 1.7,
                }}
            >
                <div>
                    Berulang setiap 7 hari · Dimulai 22 Nov 2026
                    <br />
                    Setiap orang: 4 jadwal siang + 3 jadwal malam dalam setiap siklus. Tidak ada hari libur.
                    <br />
                    Tanggal mengikuti waktu Jakarta (UTC+7).
                </div>
                <button
                    style={{ ...button, alignSelf: "start" }}
                    onClick={async () => {
                        try {
                            await navigator.clipboard.writeText(
                                window.location.href
                            )
                            setCopied(true)
                            setTimeout(() => setCopied(false), 2500)
                        } catch {
                            setCopied(false)
                        }
                    }}
                >
                    {copied ? "Tautan berhasil disalin" : "Salin tautan halaman"}
                </button>
            </footer>
        </main>
    )
}
addPropertyControls(DutyCalendar, {
    names: {
        type: ControlType.Array,
        title: "Nama Anggota",
        control: { type: ControlType.String },
        defaultValue: [
            "HASAN",
            "DANA",
            "IBRAHIM",
            "MARKUS",
            "AGUS S",
            "ARWIN",
            "YOPE",
        ],
        maxCount: 7,
    },
})
