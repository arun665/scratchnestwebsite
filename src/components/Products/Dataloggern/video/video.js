import './video.scss';





function Video(){

    return (
<div id="last">
    <div id="div1">
<h1> Know More about AmbiTag</h1>
<p> Here’s a demonstration on how to use the AmbiTag Data Logger.</p>
<iframe id="video" src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
 
    </div>


    <div id="div2">

<h1>Few more  <span>Details</span> about the product </h1>
<p> Parameters and Technical specifications of our product are listed below.</p>
    <div id="main">
  <div class="container">
<div class="accordion" id="faq">
                    <div class="card">
                        <div class="card-header" id="faqhead1">
                            <a href="#" class="btn btn-header-link" data-toggle="collapse" data-target="#faq1"
                            aria-expanded="true" aria-controls="faq1">Parameters Re-programmable using our software</a>
                        </div>

                        <div id="faq1" class="collapse show" aria-labelledby="faqhead1" data-parent="#faq">
                            <div class="card-body">
                            Log Interval - 10 min to 19 hour <br></br>
Start Delay - 0 min to 5 Hour <br></br>
Time Zone - UTC - 14.00 to UTC + 14.00 <br></br>
Low Alarm - Upto -40 °C<br></br>
High Alarm - Upto 85 °C<br></br>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="faqhead2">
                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq2"
                            aria-expanded="true" aria-controls="faq2">Technical Specifications</a>
                        </div>

                        <div id="faq2" class="collapse" aria-labelledby="faqhead2" data-parent="#faq">
                            <div class="card-body">
                            Type - Single use <br></br>
Measurement Range -–40 °C to +85 °C<br></br>
Accuracy - ±0.5 °C<br></br>
Resolution - 0.25 °C<br></br>
Memory Capacity - 13000<br></br>
Batteryy - 3V Lithium<br></br>
Recording Interval - 10 minutes(Customisable)<br></br>
Recording Duration - 90 days<br></br>
Initial Delay - 30 Mins<br></br>
Protection Class - IP67<br></br>
Report Secured - PDF<br></br>
Report Type - Graphical and Tabular manner in PDF<br></br>
Connectivity - USB 2.0<br></br>
Alarm Type - High & Low Alarm<br></br>
High Alarm - 8 °C(Customisable)<br></br>
Low Alarm - 2 °C(Customisable)<br></br>
Re-programmable - Yes<br></br>
Shelf Life - 12 months
                            </div>
                        </div>
                    </div>
  


                    <div class="card">
                        <div class="card-header" id="faqhead2">
                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq3"
                            aria-expanded="true" aria-controls="faq2"> Downloads</a>
                        </div>

                        <div id="faq3" class="collapse" aria-labelledby="faqhead2" data-parent="#faq">
                            <div class="card-body">
      Currenlty not available
                            </div>
                        </div>
                    </div>
  
  
                </div>
    </div>
  </div>
    </div>
    

    
</div>
    );
}


export default Video;