<svelte:options customElement="wacz-lightbox"/>
<svelte:window bind:innerWidth/>

<script>

  import { Buffer } from 'buffer/';
  import downloadButton from './assets/download.svg';
  export let filename = 'mono-county-pdf-01-2023-08-25T15-57-33.wacz';
  // let visible = false;
  export let path = 'https://giacomobg.github.io/wacz-component/dist/assets/';
  // export let replayBase;
  export let replayBase = './replay/';

  // let json_content;
  // let json;

  let innerWidth = 0;
  let mobile = true;
  $: mobile = innerWidth < 800;
  let visiblePane = 'replay-web';

  let url, archive_name, date_crawled_formatted, domain, domainCert,
    package_hash, iscn, numbers, avalanche, ipfs, filecoin,
    page_name, sha256Hash;
  let parsed_json = false;

  async function import_json() {
      let response_content = await fetch(path+filename+'.content.json');
      let response_json_content = await response_content.json();
      const json_content = response_json_content['contentMetadata']
      
      let response = await fetch(path + filename + '.json');
      const json = await response.json();

      page_name = json_content?.name;
      url = json_content?.private?.crawl_config?.config?.seeds[0]?.url;
      archive_name = json?.sourceId?.value;
      let date_crawled = new Date(json_content?.extras?.wacz?.dateCrawled);
      let formatter = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long', day: 'numeric',});
      let date_parts = formatter.formatToParts(date_crawled);
      date_crawled_formatted = (date_parts[2].value + ' ' + date_parts[0].value + ' ' + date_parts[4].value);
      domain = json_content?.validatedSignatures[0]?.custom?.domain;
      domainCert = json_content?.validatedSignatures[0]?.custom?.domainCert;
      package_hash = json_content?.validatedSignatures[0]?.custom?.hash;
      iscn = json?.registrationRecords?.iscn?.txHash;
      numbers = json?.registrationRecords?.numbersProtocol?.numbers?.txHash;
      avalanche = json?.registrationRecords?.numbersProtocol?.avalanche?.txHash;
      ipfs = json?.content?.cid;
      filecoin = "baga6ea4seaqflgunguw3rpwzdf47wzb4m6664pnj2732cddj4uh45x4xg5kuoma";
      hash(domainCert).then(h => sha256Hash = h);
      console.log(sha256Hash);
      console.log('PARSED JSON');
      console.log(archive_name);
      parsed_json = true;
  }
  $: console.log(sha256Hash)
  import_json();
  // import data from json_filename;
  // let json_filename = '/assets/'+filename+'.json';
  // import data from json_filename;

  // function closeBox() {
  //     visible = true;
  // }

  // $: if (json_content) {
  // } 
 async function hash(data) {
  console.log(data);
    data = data.split("-----BEGIN CERTIFICATE-----")[1].split("-----END CERTIFICATE-----")[0].replaceAll(/\s/g, '');
    // data = data.replaceAll("-----BEGIN CERTIFICATE-----","").replaceAll("-----END CERTIFICATE-----","").replaceAll(/\s/g, '').replaceAll("=", "");
    console.log(data);
    const buffer = Buffer.from(data, 'base64');
    console.log(data);

    // Convert the binary data to an ArrayBuffer
    // const buffer = new ArrayBuffer(data.length);
    // const view = new Uint8Array(buffer);
    // for (let i = 0; i < data.length; i++) {
    //   view[i] = data.charCodeAt(i);
    // }

    // Create a SHA-256 hash of the binary data
    const sha256Hash = crypto.subtle.digest('SHA-256', buffer).then(hashBuffer => {
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const sha256Hash = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
      return sha256Hash;
    }).catch(error => {
      console.error(error);
    });
    
    return sha256Hash;
  }

  function formatText(heading, content, link) {
    return "<p><strong>"+heading.toUpperCase()+ ":</strong> " + (link ? "<a href="+link+">" : "") + content.toUpperCase() + (link ? "</a>" : "") + "</p>"
  }

  function upperCase(text) {
    return text == undefined ? "ERROR IN FIELD" : text.toUpperCase()
  }

</script>

    <div id="wacz-popup">
  
      <p class='info-title'>{page_name}</p>
      
      <!-- <button on:click={open}>View archive information</button> -->
      <div class="lightbox-controls">
				<button on:click={() => visiblePane = 'replay-web'} data-btn="document" aria-controls="panes-container" class={"btn lightbox-button" + (visiblePane == 'replay-web' ? " selected" : " unselected")}>Document</button>
				<button on:click={() => visiblePane = 'archive'} data-btn="archive" aria-controls="panes-container" class={"btn lightbox-button" + (visiblePane == 'archive' ? " selected" : " unselected")}>Archive</button>
				<button on:click={() => visiblePane = 'registration'} data-btn="registration" aria-controls="panes-container" class={"btn lightbox-button" + (visiblePane == 'registration' ? " selected" : " unselected")}>Registration</button>
			</div>

      <div id="panes-container">
      {#if visiblePane == 'replay-web'}
        <replay-web-page
          id="embed" 
          source={path + filename} 
          embed="replayonly" 
          {url}
          replayBase={replayBase}
          >
        </replay-web-page>

        <!-- <a href={link}>{content.toUpperCase()}</a> -->

      {:else if visiblePane == 'archive'}
        {#if parsed_json}
          <div class="pane">
            <div class="tooltip plus">
                <p><strong>{upperCase('Archive name')}</strong>: 
                  {upperCase(archive_name)}
                </p>
            </div>
            <div class="tooltip plus">
              <p><strong>{upperCase('Original URL')}<span class="far fa-question-circle">i</span></strong>
                <span class="tooltiptext plus">The original link these webpages were archived from</span>: 
                <a href={url}>{upperCase(url)}</a>
              </p>
            </div>
            <div class="tooltip plus">
              <p><strong>{upperCase('Archived on')}<span class="far fa-question-circle">i</span></strong>
                <span class="tooltiptext plus">The date and time that the website archive was captured</span>: 
                {upperCase(date_crawled_formatted)}
              </p>
            </div>  
            <div class="tooltip plus">
              <p><strong>{upperCase('Observed by')}<span class="far fa-question-circle">i</span></strong>
                <span class="tooltiptext plus">The notary, signed with a cryptographic certificate to establish a witness</span>: 
                {upperCase(domain)}
                <br>
                <a href={'https://crt.sh/?q='+sha256Hash}>{upperCase('View certificate')}</a>
              </p>
            </div>
            <div class="tooltip plus">
              <p><strong>{upperCase('Package hash')}<span class="far fa-question-circle">i</span></strong>
                <span class="tooltiptext plus">A hash is a unique fingerprint created with a function using the web archive and metadata as input, that will change if even one byte of the original input is changed. Hashes are used to check if copies of an archive differ from the original.</span>: 
                {upperCase(package_hash)}
              </p>
            </div>
          </div>
        {/if}
      {:else}
        {#if parsed_json}
          <div class="pane">

            <div class="tooltip plus">
              <p class="subheading"><strong>BLOCKCHAIN REGISTRATION</strong><span class="far fa-question-circle">i</span>
                <span class="tooltiptext plus">Hashes of the web archives & metadata about the archive are registered on different blockchains to establish an immutable record of what was captured, and when.</span></p>
              <!-- <div class="tooltip plus"> -->
                <p><strong>{upperCase('ISCN on Likecoin')}
                  <br>{upperCase('Transaction ID')}</strong>: <a href={"https://app.like.co/"}>{upperCase(iscn)}</a>
                </p>
              <!-- </div> -->
              <!-- <div class="tooltip plus"> -->
                <p><strong>{upperCase('Numbers Protocol on Numbers')}
                  <br>{upperCase('Transaction ID')}</strong>: <a href={"https://mainnet.num.network/overview"}>{upperCase(iscn)}</a>
                </p>
              <!-- </div> -->
              <!-- <div class="tooltip plus"> -->
                <p><strong>{upperCase('Numbers Protocol on Avalanche')} 
                  <br>{upperCase('Transaction ID')}</strong>: <a href={"https://snowtrace.io/search?f=0&q="+avalanche}>{upperCase(avalanche)}</a>
                </p>
              <!-- </div> -->
            </div>

            <div class="tooltip plus">
              <p class="subheading"><strong>STORAGE AND ARCHIVING</strong><span class="far fa-question-circle">i</span>
              <span class="tooltiptext plus">Copies of these web archives were stored in a resilient, peer-to-peer system (IPFS), and in a long term crypto-incentivized distributed storage system (Filecoin)</span></p>
                <p><strong>{'IPFS'}
                  <br>{'CID'}</strong>: <a href={"https://replayweb.page/?source=https://w3s.link/ipfs/"+ipfs}>{upperCase(ipfs)}</a>
                </p>
                <p><strong>{upperCase('Filecoin')}
                  <br>{upperCase('Piece Content ID')}</strong>: <a href={"https://filecoin.tools/"+filecoin}>{upperCase(filecoin)}</a>
                </p>
                <br>
            </div>
            <a href={"http://ipfs.io/ipfs/"+ipfs}><button class="btn dl-button"><img id="dl-button-img" src={downloadButton} alt="Download button"/>DOWNLOAD ARCHIVE</button></a>
          </div>
        {/if}
      {/if}
      </div>

    
    </div>  


<style>

  #wacz-popup {
    height: 100%;
    width: 100%;
    /* position: absolute; */
    /* background-color: #fff; */
  }

  #panes-container {
    height: calc(100% - 147px);
  }

  replay-web-page {
    position: relative;
    /* height: calc(); */
    /* top: 152px; */
    z-index: 1;
  }

  .info-title {
    font-size: 22px;
    font-weight: 700;
  }

  .property-group {
    padding-left: 4px;
    /* border-left: 2px solid #213547; */
  }

  .heading {
    font-size: 24px;
  }
  .subheading {
    font-size: 1.1em;
  }

  strong {
    font-weight: 700;
  }
  mark {
    /* font-size: 20px; */
    background-color: #ffc61e;
  }

  .lightbox-controls {
      margin: 5px 0px;
      display: flex;
      gap: .5rem;
  }

  @media (min-width:650px) {
    .lightbox-controls {
    }
  }
  @media (max-width:649px) {
    .lightbox-controls {
      flex-direction: column;
    }
    .lightbox-button {
      margin-bottom: 6px;
    }
  }

  .lightbox-button {
    color: #383838;
    border-color: #383838;
    width: 100%;
    padding: 1.325em calc(1em + 12px);
    background: #fff;
  }
  .btn {
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
    text-align: center;
    text-transform: uppercase;
    transition: color 300ms ease,background-color 300ms ease,border 300ms ease,border-radius 300ms ease,letter-spacing 300ms ease;
  }
  .lightbox-button.selected {
    background: #ffc61e;
    border-width: 0;
    border-color: #ffc61e;
    border-style: solid;
  } 

  .lightbox-button.unselected:hover, .dl-button:hover {
    color: #000 !important;
    letter-spacing: 2px !important;
    background-color: #bfbfbf;
    /* background-image: initial; */
    border-color: #bfbfbf !important;
    border-radius: 0 !important;
    border-style: solid;
  }

  :global(a) {
    color: #383838;
  }

  .pane {
    box-shadow: 1px 4px 48px rgba(0,0,0,.075);
    margin: 40px;
    padding: 40px;
    overflow-wrap: break-word;
  }

  .tooltip .tooltiptext {
      visibility: hidden;
      width: 250px;
      background-color: #383838;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 10px 10px;
      position: absolute;
      z-index: 1;
      bottom: 102%;
      /* left: 50%; */
      margin-left: -145px;
      opacity: 0;
      transition: opacity 0.3s;
  }
  .tooltip .tooltiptext::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: #383838 transparent transparent transparent;
  }

  .tooltip {
    position: relative;
  }
  .tooltip:hover .tooltiptext {
      visibility: visible;
      opacity: 1;
  }

  .far {
    display: inline-block;
    line-height: 19px;
    width: 19px;
    /* margin-right: 5px; */
    /* padding: 7px; */
    border: solid 1px;
    border-radius: 50%;
    text-align: center;
    margin-left: 5px;
  }

  .dl-button {
    padding: 0px 26px 20px 26px;
    background: #ffc61e;
    border-color: #ffc61e;
  }

  #dl-button-img {
    position: relative;
    top: 10px;
    height: 34px;
    width: 34px;
    margin-right: 5px;
  }
  

</style>
