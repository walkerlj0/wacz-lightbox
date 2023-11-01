<svelte:options customElement="wacz-lightbox"/>
<svelte:window bind:innerWidth/>

<script>

  // import * from './lib/replay/ui.js';

  export let filename = 'mono-county-pdf-01-2023-08-25T15-57-33.wacz';
  // let visible = false;
  export let path = 'https://giacomobg.github.io/wacz-component/dist/assets/'
  // export let replayBase;
  export let replayBase = './replay/';

  // let json_content;
  // let json;

  let innerWidth = 0;
  let mobile = true;
  $: mobile = innerWidth < 800;
  let visiblePane = 'replay-web';

  let url, archive_name, date_crawled, domain, domainCert,
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
      date_crawled = json_content?.extras?.wacz?.dateCrawled;
      domain = json_content?.validatedSignatures[0]?.custom?.domain;
      domainCert = json_content?.validatedSignatures[0]?.custom?.domainCert;
      package_hash = json_content?.validatedSignatures[0]?.custom?.hash;
      iscn = json?.registrationRecords?.iscn?.txHash;
      numbers = json?.registrationRecords?.numbersProtocol?.numbers?.txHash;
      avalanche = json?.registrationRecords?.numbersProtocol?.avalanche?.txHash;
      ipfs = json?.content?.cid;
      filecoin = "Will come later";
      hash(domainCert).then(hash => sha256Hash = hash);

      parsed_json = true;
  }
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
    data = data.replaceAll("-----BEGIN CERTIFICATE-----","").replaceAll("-----END CERTIFICATE-----","").replaceAll(/\s/g, '').replaceAll("=", "");
    data = atob(data);

    // Convert the binary data to an ArrayBuffer
    const buffer = new ArrayBuffer(data.length);
    const view = new Uint8Array(buffer);
    for (let i = 0; i < data.length; i++) {
      view[i] = data.charCodeAt(i);
    }

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

</script>

    <div id="wacz-popup">
  
      <p class='info-title'>{page_name}</p>
      
      <!-- <button on:click={open}>View archive information</button> -->
      <div class="lightbox-controls">
				<button on:click={() => visiblePane = 'replay-web'} data-btn="document" aria-controls="modal-details" class={"lightbox-button" + (visiblePane == 'replay-web' ? " selected" : " unselected")}>Document</button>
				<button on:click={() => visiblePane = 'archive'} data-btn="archive" aria-controls="modal-details" class={"lightbox-button" + (visiblePane == 'archive' ? " selected" : " unselected")}>Archive</button>
				<button on:click={() => visiblePane = 'registration'} data-btn="registration" aria-controls="modal-details" class={"lightbox-button" + (visiblePane == 'registration' ? " selected" : " unselected")}>Registration</button>
			</div>

      {#if visiblePane == 'replay-web'}
        <replay-web-page
          id="embed" 
          source={path + filename} 
          embed="replayonly" 
          {url}
          replayBase={replayBase}
          >
        </replay-web-page>
      {:else if visiblePane == 'archive'}
        {#if parsed_json}
          <div class="property-group">
            <p><strong>Archive name</strong><br>{archive_name}</p>
          </div>
          <div class="property-group">
            <p><strong>Webpage</strong><br><a href={url}>{url}</a></p>
          </div>

          <div class="property-group">
            <p><strong>Archived on</strong><br>{date_crawled}</p>
          </div>

          <div class="property-group">
            <p><strong>Observed by</strong><br>{domain}<br>View certificate: <a href={'https://crt.sh/?='+sha256Hash}>{sha256Hash}</a></p>
          </div>

          <div class="property-group">
            <p><strong>Package hash</strong><br>{package_hash}</p>
          </div>
        {/if}
      {:else}
        {#if parsed_json}
          <div class="property-group">
            <p class="subheading"><em><strong><mark>Registration</mark></strong></em></p>
            <p><strong>ISCN on Likecoin</strong><br>Transaction ID: <a href={"https://app.like.co/"}>{iscn}</a></p>
            <p><strong>Numbers Protocol on Numbers</strong><br>Transaction ID: <a href={"https://mainnet.num.network/overview"}>{numbers}</a></p>
            <p><strong>Numbers Protocol on Avalanche</strong><br>Transaction ID: <a href={"https://snowtrace.io/search?f=0&q="+avalanche}>{avalanche}</a></p>
          </div>

          <div class="property-group">
            <p class="subheading"><em><strong><mark>Storage and archiving</mark></strong></em></p>
            <p><strong>IPFS</strong><br>CID: <a href={"http://ipfs.io/ipfs/"+ipfs}>{ipfs}</a></p>
            <p><strong>Filecoin</strong><br>Piece Content ID: <a href="https://filecoin.tools">{filecoin}</a></p>
          </div>

          <div class="property-group last-info">
            <a href={"http://ipfs.io/ipfs/"+ipfs} class="button"><strong><mark>Download archive</mark></strong></a>
          </div>
        {/if}
      {/if}
    

    
    </div>  


<style>


  #wacz-popup {
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: #fff;
  }

  @media(max-width: 799px) {
    replay-web-page {
      position: absolute;
      top: 152px;
      z-index: 1;
    }

    details {
      position: relative;
      margin-left: 3px;
      width: 100%;
      max-width: 400px;
      /* padding: 4px 10px; */
      /* border: 2px solid #8997C1; */
    }
    div.content { 
      position: relative;
      border: 2px solid #fff;
      max-height: 0;
      overflow: hidden;
      transition: max-height 400ms ease-out, border 0ms 400ms linear;
    }

    details[open] + div.content {
      /* border: 2px solid #8997C1; */
      max-height: 1200px; /* Set a max-height value enough to show all the content */        
      transition: max-height 400ms ease-out, border 0ms linear;
      padding-bottom: 20px;
    }

    details[open] span::before {
        rotate: 90deg;
        transition: rotate 200ms ease-out;
    }
  }

  @media(min-width: 800px) {
    replay-web-page {
      position: absolute;
      top: 80px;
      width: 50%;
    }

    details {
      position: absolute;
      /* padding: 4px 10px; */
      /* border: 2px solid #8997C1; */
      left: 50%;
      width: calc(50% - 35px);
    }
    div.content {
      position: absolute;
      left: 50%;
      top: 80px;
      width: calc(50% - 10px);
      /* border: 2px solid #888; */
      /* background-color: ; */
    }
    .last-info {
      margin-bottom: 10px;
    }
  } 

  

  /* @media(min-width: 800px) {
    #info, replay-web-page {
      float: left;
      width: calc(50% - 10px);
    }
  } */

  details {
    /* max-width: 500px; */
    overflow: hidden;
    border-radius: 4px;
    text-align: center;
    font-size: clamp(1.13rem, calc(1.13rem + 0.00vw), 1.13rem);
    cursor: pointer;
    padding: 1em 12px;
    background-color: #ffc61e;
  }

  div.content {
    margin: 1px;
    /* width: 100%; */
    border-radius: 4px;
    box-sizing: border-box;
    padding: 0 10px;
    background-color: #fff;
    overflow-wrap: break-word;
  }


  .info-title {
    font-size: 22px;
    font-weight: 700;
  }

  .property-group {
    padding-left: 4px;
    border-left: 2px solid #213547;
  }

  .heading {
    font-size: 24px;
  }
  .subheading {
    font-size: 1.1em;
  }

  mark {
    background-color: #ffc61e;
    padding-top: 2px;
  }

  .lightbox-controls {
    margin: 5px;
    display: flex;
    gap: .5rem;
  }

  .lightbox-button {
    font-family: "Poppins",Helvetica,Arial,Lucida,sans-serif !important;
    padding: 1.325em calc(1em + 12px);
    width: 100%;
    color: #383838;
    background: #fff;
    border-width: 1px;
    border-color: #383838;
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
  } 

  .lightbox-button.unselected:hover {
    color: #000 !important;
    letter-spacing: 2px !important;
    background-color: #bfbfbf;
    /* background-image: initial; */
    border-color: #bfbfbf !important;
    border-radius: 0 !important;
  }

</style>
