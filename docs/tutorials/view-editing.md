import ManageButton from '/static/img/mango/tutorials/view-editing/manage_button.png';
import PagesButton from '/static/img/mango/tutorials/view-editing/new_pages_button.png';
import DeleteButton from '/static/img/mango/tutorials/view-editing/delete_pages.png';
import ReorderButton from '/static/img/mango/tutorials/view-editing/reorder_pages.png';
import URLField from '/static/img/mango/tutorials/view-editing/links.png';
import SidebarWidth from '/static/img/mango/tutorials/view-editing/sidebar_width.png';
import SaveView from '/static/img/mango/tutorials/view-editing/save_view.png';
import UploadDownloadButton from '/static/img/mango/tutorials/view-editing/upload_download.png';

# View Editing

Users can customize the MANGO view by adding, deleting, and modifying page groups and pages. Changes made by a user will apply only to that user unless changes are saved. If changes are saved, the saved view will apply to everyone who accesses the tool.

1. Click on the **Manage** button to open the configuration page.
    <img src={ManageButton} alt="manage_button" style={{width: 600}} />


2. Edit the view:
    
    + Users can add page groups and pages by clicking the **New Page Group** and **New Page** buttons respectively.
        <img src={PagesButton} alt="pages_button" style={{width: 600}} />
        <br /><br /><br />
        
    + Users can delete page groups and pages by clicking the delete icon.
        <img src={DeleteButton} alt="delete_button" style={{width: 600}} />
        <br /><br /><br />
    
    + Users can shuffle the order of the page groups and pages using the arrow icons.
        <img src={ReorderButton} alt="reorder_button" style={{width: 500}} />
        <br /><br /><br />
    
    + The URL field is the relative path to a given page group or page. The title field is what users will see in the left menu.
        <img src={URLField} alt="url_field" style={{width: 500}} />
        <br /><br /><br />

    + To change the width of the left menu bar, adjust the **Sidebar Width** parameter.
        <img src={SidebarWidth} alt="sidebar_width" style={{width: 200}} />
        <br /><br /><br />

3. Save the view by clicking **Save View Changes**. Note that users will be prompted for the admin password.
    <img src={SaveView} alt="save_view" style={{width: 600}} />
    <br /><br /><br />

Users can download view configurations as JSON by clicking the **Download View** button and upload JSON configurations using the file browser.
    <img src={UploadDownloadButton} alt="upload_download_button" style={{width: 500}} />

