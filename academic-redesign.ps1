$path = ".\src\main.jsx"
$content = Get-Content $path -Raw

$startMarker = '          <GlassCard className="academicPerformanceCard">'
$endMarker = '          <div className="timeline">'

$start = $content.IndexOf($startMarker)
$end = $content.IndexOf($endMarker, $start)

if ($start -lt 0) {
    Write-Host "ERROR: Academic Performance section was not found." -ForegroundColor Red
}
elseif ($end -lt 0) {
    Write-Host "ERROR: Timeline section was not found." -ForegroundColor Red
}
else {

    $replacement = @'
          <GlassCard className="academicPerformanceCard">

            <div className="academicHero">
              <div className="academicHeroContent">
                <div className="academicIcon">▣</div>

                <div>
                  <span className="eyebrowSmall">ACADEMIC PERFORMANCE</span>
                  <h2>Azeraksh Academic Center</h2>
                  <p>Tuition Transcript · 5 Semesters · 10 Months</p>
                </div>
              </div>

              <div className="academicAverage">
                <span>OVERALL AVERAGE</span>
                <strong>92.05%</strong>
                <small>Across all 5 semesters</small>
              </div>
            </div>


            <div className="academicStats">

              <div className="academicStatCard">
                <div className="academicStatIcon">↗</div>
                <div>
                  <span>HIGHEST</span>
                  <strong>98%</strong>
                </div>
              </div>

              <div className="academicStatCard">
                <div className="academicStatIcon">↘</div>
                <div>
                  <span>LOWEST</span>
                  <strong>78.5%</strong>
                </div>
              </div>

              <div className="academicStatCard">
                <div className="academicStatIcon">◫</div>
                <div>
                  <span>ASSESSMENT</span>
                  <strong>20% + 80%</strong>
                </div>
              </div>

              <div className="academicStatCard">
                <div className="academicStatIcon">◷</div>
                <div>
                  <span>PERIOD</span>
                  <strong>10 Months</strong>
                </div>
              </div>

            </div>


            <div className="academicSectionHeading">
              <div>
                <span className="eyebrowSmall">ACADEMIC RECORD</span>
                <h3>Semester Score Breakdown</h3>
                <p>Detailed performance across five academic semesters.</p>
              </div>

              <span className="academicSectionBadge">5 SEMESTERS</span>
            </div>


            <div className="semesterGrid">

              {semesters.map(([semester, midTerm, final, total]) => (

                <div className="semesterCard" key={semester}>

                  <div className="semesterCardHeader">

                    <div>
                      <span className="semesterLabel">ACADEMIC TERM</span>
                      <span className="semesterNumber">
                        SEMESTER {semester}
                      </span>
                    </div>

                    <div className="semesterTotal">
                      <span>TOTAL</span>
                      <strong>{total}</strong>
                    </div>

                  </div>

                  <div className="semesterDivider" />

                  <div className="semesterScores">

                    <div className="semesterScore">
                      <span className="scoreLabel">MID TERM</span>
                      <strong>{midTerm}</strong>
                      <small>20% weight</small>
                    </div>

                    <div className="semesterScore">
                      <span className="scoreLabel">FINAL</span>
                      <strong>{final}</strong>
                      <small>80% weight</small>
                    </div>

                    <div className="semesterScore totalScore">
                      <span className="scoreLabel">TOTAL</span>
                      <strong>{total}</strong>
                      <small>100% result</small>
                    </div>

                  </div>

                </div>

              ))}

            </div>


            <div className="assessmentWeightingCard">

              <div className="assessmentIcon">◫</div>

              <div className="assessmentContent">
                <span className="eyebrowSmall">ASSESSMENT METHOD</span>
                <h3>How the final score is calculated</h3>
                <p>
                  Each semester combines the Mid Term examination and Final
                  examination into one final academic result.
                </p>
              </div>

              <div className="assessmentFormula">
                <strong>20%</strong>
                <span>Mid Term</span>
                <b>+</b>
                <strong>80%</strong>
                <span>Final</span>
                <b>=</b>
                <strong>100%</strong>
              </div>

            </div>


            <div className="academicRecordSection">

              <div className="academicRecordHeader">

                <div className="academicRecordTitle">
                  <div className="recordIcon">▤</div>

                  <div>
                    <span className="eyebrowSmall">ORIGINAL DOCUMENT</span>
                    <h3>Academic Record</h3>
                    <p>Original Azeraksh tuition transcript pages.</p>
                  </div>
                </div>

                <span className="academicSectionBadge">
                  2 DOCUMENT PAGES
                </span>

              </div>


              <div className="transcriptGrid">

                <div className="transcriptCard">

                  <div className="transcriptImageWrap">

                    <img
                      src="/assets/academic/azeraksh-transcript-2 (1).jpg"
                      alt="Azeraksh Academic Transcript - Page 1"
                    />

                    <span className="transcriptPageNumber">
                      PAGE 01
                    </span>

                  </div>

                  <div className="transcriptInfo">

                    <div className="transcriptTitleRow">
                      <span className="documentIcon">▤</span>
                      <strong>Transcript Page 01</strong>
                    </div>

                    <p>
                      Original academic transcript · Page 1
                    </p>

                    <button
                      type="button"
                      className="transcriptButton"
                      onClick={() =>
                        window.open(
                          "/assets/academic/azeraksh-transcript-2 (1).jpg",
                          "_blank"
                        )
                      }
                    >
                      VIEW FULL PAGE ↗
                    </button>

                  </div>

                </div>


                <div className="transcriptCard">

                  <div className="transcriptImageWrap">

                    <img
                      src="/assets/academic/azeraksh-transcript-2 (2).jpg"
                      alt="Azeraksh Academic Transcript - Page 2"
                    />

                    <span className="transcriptPageNumber">
                      PAGE 02
                    </span>

                  </div>

                  <div className="transcriptInfo">

                    <div className="transcriptTitleRow">
                      <span className="documentIcon">▤</span>
                      <strong>Transcript Page 02</strong>
                    </div>

                    <p>
                      Original academic transcript · Page 2
                    </p>

                    <button
                      type="button"
                      className="transcriptButton"
                      onClick={() =>
                        window.open(
                          "/assets/academic/azeraksh-transcript-2 (2).jpg",
                          "_blank"
                        )
                      }
                    >
                      VIEW FULL PAGE ↗
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </GlassCard>

'@

    $newContent = $content.Substring(0, $start) + $replacement + $content.Substring($end)

    Set-Content -Path $path -Value $newContent -Encoding UTF8

    Write-Host ""
    Write-Host "ACADEMIC SECTION REPLACED SUCCESSFULLY." -ForegroundColor Green
    Write-Host "main.jsx was updated safely." -ForegroundColor Green
}